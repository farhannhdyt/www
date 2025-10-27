import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginNext from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier/flat";

const compat = new FlatCompat();

const config = [
  {
    plugins: {
      "@next/next": eslintPluginNext
    }
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  eslintConfigPrettier
];

export default config;
