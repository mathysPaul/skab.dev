import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

// Flat config (Next.js 16: `next lint` removed, eslint-config-next ships native
// flat configs). The ignores block replaces what `next lint` handled implicitly.
const eslintConfig = [
  { ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"] },
  ...coreWebVitals,
  ...typescript,
];

export default eslintConfig;
