import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  corePlugins: {
    preflight: false,
  },
  plugins: [],
  theme: {
    extend: {},
  },
};
export default config;
