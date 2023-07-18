import tailwindcss from 'prettier-plugin-tailwindcss'

/** @type {import("prettier").Options} */
export default {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  plugins: [tailwindcss],
}
