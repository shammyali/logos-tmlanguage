import fs from "node:fs";

const grammar = JSON.parse(fs.readFileSync("logos.tmLanguage.json", "utf8"));

const required = [
  ["name", "Logos"],
  ["scopeName", "source.logos"]
];

for (const [key, expected] of required) {
  if (grammar[key] !== expected) {
    throw new Error(`${key} must be ${expected}`);
  }
}

if (!Array.isArray(grammar.patterns) || grammar.patterns.length === 0) {
  throw new Error("grammar must contain top-level patterns");
}

const repository = grammar.repository ?? {};
for (const key of [
  "comments",
  "strings",
  "keywords",
  "builtins",
  "numbers",
  "function-definitions",
  "record-fields",
  "types",
  "operators",
  "punctuation"
]) {
  if (!repository[key]) {
    throw new Error(`missing repository rule: ${key}`);
  }
}

console.log("logos.tmLanguage.json valid");
