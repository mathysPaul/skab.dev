import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";

// Flat config (Next.js 16: `next lint` removed, eslint-config-next ships native
// flat configs). The ignores block replaces what `next lint` handled implicitly.
const eslintConfig = [
  // Source-only lint. `.claude/**` (agent worktrees) and `.docs/**` (design
  // notes, salvaged references) are gitignored, non-source artifacts.
  { ignores: [".next/**", "out/**", "build/**", "next-env.d.ts", ".claude/**", ".docs/**"] },
  ...coreWebVitals,
  ...typescript,
  {
    // Deterministic import order + dead-import removal, autofixed by eslint --fix
    // (editor on-save and the pre-commit hook), so it stays identical across machines.
    plugins: {
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
      ],
    },
  },
];

export default eslintConfig;
