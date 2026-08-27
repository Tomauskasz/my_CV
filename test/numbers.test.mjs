/* Run: node test/numbers.test.mjs
 *
 * The only assertable logic on this page. Everything else in the live layer
 * needs a compositing browser to mean anything; this does not.
 *
 * The invariant that matters is not "the animation looks right" — it is that
 * a figure on a CV never displays a value it does not hold. A count that
 * passes through 6.7 on its way to 6.3 is a fabricated claim about expert
 * decisions, and it would be invisible in review.
 */

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

// numbers.js is a plain script for the browser, so it is run rather than
// imported. No test-only export exists in it, and none should.
const source = readFileSync(fileURLToPath(new URL("../numbers.js", import.meta.url)), "utf8");
const sandbox = {};
new Function("globalThis", source)(sandbox);

const { NUMBER_PATTERN, COUNT_DURATION, describeNumber, countExponent, frameValue } =
  sandbox.CVNumbers;

/** The finished string, reached the way the page reaches it. */
const printed = (spec) => frameValue(spec, countExponent(spec), 1);

let checks = 0;
const check = (name, fn) => {
  fn();
  checks += 1;
  console.log(`  ok  ${name}`);
};

/* Every figure the two languages actually publish, plus the shapes that
   surround them in prose. Lithuanian writes 6,3 where English writes 6.3, and
   both write thousands with a non-breaking space. */
const NBSP = " ";
const FIGURES = [
  "1", "2", "3", "4", "5", "7", "12", "15", "24", "40", "95", "138",
  "6.3", "6,3", `2${NBSP}200`, "2,200", "3.4",
];

check("digit runs are found without swallowing their surroundings", () => {
  const read = (text) => {
    NUMBER_PATTERN.lastIndex = 0;
    return text.match(NUMBER_PATTERN);
  };
  assert.deepEqual(read("5–10 min."), ["5", "10"], "an en-dash range is two figures");
  assert.deepEqual(read(`nuo ${NBSP}2${NBSP}200 iki 6,3`), [`2${NBSP}200`, "6,3"]);
  assert.deepEqual(read("98 laps out of 100"), ["98", "100"]);
  assert.equal(read("no digits here"), null);
});

check("the separator convention is read from the string, never the locale", () => {
  assert.deepEqual(
    { ...describeNumber("6,3") },
    { value: 6.3, integerDigits: 1, decimals: 1, groupSeparator: "", decimalSeparator: "," },
  );
  assert.deepEqual(
    { ...describeNumber("6.3") },
    { value: 6.3, integerDigits: 1, decimals: 1, groupSeparator: "", decimalSeparator: "." },
  );
  // Three digits after a single separator is a thousands group, not a decimal.
  const grouped = describeNumber(`2${NBSP}200`);
  assert.equal(grouped.value, 2200);
  assert.equal(grouped.decimals, 0);
  assert.equal(grouped.groupSeparator, NBSP);
});

check("a counter never displays a value the figure does not pass through", () => {
  for (const raw of FIGURES) {
    const spec = describeNumber(raw);
    const exponent = countExponent(spec);
    const step = 1000 / 60 / COUNT_DURATION;
    for (let progress = 0; progress <= 1 + step; progress += step) {
      const shown = frameValue(spec, exponent, Math.min(1, progress));
      const asNumber = Number(shown.split(NBSP).join("").split(" ").join("").replace(",", "."));
      assert.ok(
        Number.isFinite(asNumber) && asNumber >= 0 && asNumber <= spec.value + 1e-9,
        `${raw}: displayed ${shown}, which overshoots the published figure`,
      );
    }
    assert.equal(frameValue(spec, exponent, 1), raw, `${raw}: end state is the authored string`);
  }
});

check("the printed string never changes width mid-count", () => {
  for (const raw of FIGURES) {
    const spec = describeNumber(raw);
    const exponent = countExponent(spec);
    const width = printed(spec).length;
    const step = 1000 / 60 / COUNT_DURATION;
    for (let progress = 0; progress <= 1 + step; progress += step) {
      const shown = frameValue(spec, exponent, Math.min(1, progress));
      assert.equal(shown.length, width, `${raw}: "${shown}" is ${shown.length}, expected ${width}`);
    }
  }
});

check("the round trip is exact, so no rounding can alter a published figure", () => {
  for (const raw of FIGURES) {
    assert.equal(printed(describeNumber(raw)), raw);
  }
});

check("every counter settles inside one duration, and within 2x of each other", () => {
  const settles = FIGURES.map((raw) => {
    const spec = describeNumber(raw);
    const exponent = countExponent(spec);
    const final = printed(spec);
    const step = 1000 / 60 / COUNT_DURATION;
    for (let progress = 0; progress <= 1; progress += step) {
      if (frameValue(spec, exponent, progress) === final) {
        return progress * COUNT_DURATION;
      }
    }
    assert.fail(`${raw} never reaches its own value inside COUNT_DURATION`);
  });
  const spread = Math.max(...settles) / Math.min(...settles);
  assert.ok(spread < 2, `settle spread is ${spread.toFixed(2)}x; the per-counter curve has drifted`);
});

check("the exponent stays an ease-OUT for every figure", () => {
  for (const raw of FIGURES) {
    const k = countExponent(describeNumber(raw));
    assert.ok(k >= 1 && k <= 5, `${raw}: k=${k} escapes [1, 5] and would ease IN`);
  }
});

console.log(`\n${checks} checks passed`);
