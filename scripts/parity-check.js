// scripts/parity-check.js
// Automated verification script for translation dictionary parity and DOM target consistency.

const fs = require("fs");
const path = require("path");

function runParityCheck() {
  console.log("🔍 Running CV Translation & Integrity Parity Check...");

  const langFilePath = path.join(__dirname, "..", "lang.js");
  const htmlFilePath = path.join(__dirname, "..", "index.html");

  if (!fs.existsSync(langFilePath)) {
    console.error("❌ lang.js not found!");
    process.exit(1);
  }
  if (!fs.existsSync(htmlFilePath)) {
    console.error("❌ index.html not found!");
    process.exit(1);
  }

  const langContent = fs.readFileSync(langFilePath, "utf8");
  const htmlContent = fs.readFileSync(htmlFilePath, "utf8");

  // Load translations dictionary from lang.js
  const match = langContent.match(/const\s+translations\s*=\s*({[\s\S]*?});\n\nconst/);
  if (!match) {
    console.error("❌ Could not extract translations object from lang.js");
    process.exit(1);
  }

  let translations;
  try {
    eval("translations = " + match[1]);
  } catch (e) {
    console.error("❌ Failed to parse translations dictionary:", e.message);
    process.exit(1);
  }

  const { EN, LT } = translations;
  if (!EN || !LT) {
    console.error("❌ Both EN and LT dictionaries must exist.");
    process.exit(1);
  }

  let errors = [];

  // Check top-level keys parity
  const enKeys = Object.keys(EN).sort();
  const ltKeys = Object.keys(LT).sort();
  if (JSON.stringify(enKeys) !== JSON.stringify(ltKeys)) {
    errors.push(`Top-level keys mismatch between EN and LT: \nEN: ${enKeys}\nLT: ${ltKeys}`);
  }

  // Check sections parity
  const enSectionKeys = Object.keys(EN.sections).sort();
  const ltSectionKeys = Object.keys(LT.sections).sort();
  if (JSON.stringify(enSectionKeys) !== JSON.stringify(ltSectionKeys)) {
    errors.push(`Section keys mismatch: \nEN: ${enSectionKeys}\nLT: ${ltSectionKeys}`);
  }

  // Check experience array count and item structure
  if (EN.experience.length !== LT.experience.length) {
    errors.push(`Experience count mismatch: EN=${EN.experience.length}, LT=${LT.experience.length}`);
  }

  // Check research array count
  if (EN.research.length !== LT.research.length) {
    errors.push(`Research count mismatch: EN=${EN.research.length}, LT=${LT.research.length}`);
  }

  // Check projects array count
  if (EN.projects.length !== LT.projects.length) {
    errors.push(`Projects count mismatch: EN=${EN.projects.length}, LT=${LT.projects.length}`);
  }

  // Check constellation nodes and links parity
  const enNodes = EN.constellationGraph.nodes.map(n => n.id).sort();
  const ltNodes = LT.constellationGraph.nodes.map(n => n.id).sort();
  if (JSON.stringify(enNodes) !== JSON.stringify(ltNodes)) {
    errors.push(`Constellation nodes mismatch: \nEN: ${enNodes}\nLT: ${ltNodes}`);
  }

  // Verify all constellation targetIds exist in HTML or dynamic render targets
  const allTargetIds = EN.constellationGraph.nodes.map(n => n.targetId);
  allTargetIds.forEach(targetId => {
    if (!htmlContent.includes(`id="${targetId}"`) && !langContent.includes(`id="${targetId}"`)) {
      errors.push(`Constellation targetId "${targetId}" not found in index.html or lang.js template.`);
    }
  });

  if (errors.length > 0) {
    console.error("❌ Parity check failed with errors:");
    errors.forEach(err => console.error("  - " + err));
    process.exit(1);
  }

  console.log("✅ All translation keys, structures, and constellation node targets pass parity verification!");
}

runParityCheck();
