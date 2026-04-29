/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blues-0d-2137": "var(--blues-0d-2137)",
        "blues-1a-3a-5c": "var(--blues-1a-3a-5c)",
        "blues-2e-6099": "var(--blues-2e-6099)",
        "bluesebf-3fa": "var(--bluesebf-3fa)",
        "greens-1b-4332": "var(--greens-1b-4332)",
        "greens-2d-6a-4f": "var(--greens-2d-6a-4f)",
        "greens-5-2a-788": "var(--greens-5-2a-788)",
        "greensa-8d-3c-5": "var(--greensa-8d-3c-5)",
        "greensd-4e-9e-2": "var(--greensd-4e-9e-2)",
        "neutrals-5a-6662": "var(--neutrals-5a-6662)",
        "neutrals-7a-8a-85": "var(--neutrals-7a-8a-85)",
        "neutralsa-8b-0ad": "var(--neutralsa-8b-0ad)",
        "neutralse-8ebe-9": "var(--neutralse-8ebe-9)",
        neutralsfafbfa: "var(--neutralsfafbfa)",
        neutralsffffff: "var(--neutralsffffff)",
      },
      fontFamily: {
        "web-body": "var(--web-body-font-family)",
        "web-h1": "var(--web-h1-font-family)",
        "web-h2": "var(--web-h2-font-family)",
        "web-h3": "var(--web-h3-font-family)",
        "web-h4": "var(--web-h4-font-family)",
        "web-h5": "var(--web-h5-font-family)",
        "web-h6": "var(--web-h6-font-family)",
        "web-small": "var(--web-small-font-family)",
      },
      boxShadow: {
        "card-shadow": "var(--card-shadow)",
      },
    },
  },
  plugins: [],
};
