module.exports = {
  '{apps,libs}/**/*.{ts,tsx}': [
    (files) => `pnpm nx affected -t typecheck --files=${files.join(',')}`,
  ],
  '{apps,libs}/**/*.{ts,tsx,js,jsx,json,md}': [
    (files) => `pnpm nx affected -t lint --files=${files.join(',')}`,
    (files) => `pnpm nx format:write --files=${files.join(',')}`,
  ],
};
