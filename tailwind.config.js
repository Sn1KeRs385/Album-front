const spacing0to100 = Object.fromEntries(
  Array.from({ length: 101 }).map((_, index) => [`${index}px`, `${index}px`])
)
const spacing0to500 = Object.fromEntries(
  Array.from({ length: 501 }).map((_, index) => [`${index}px`, `${index}px`])
)

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './index.html'],

  theme: {
    extend: {
      borderWidth: {
        ...spacing0to100,
      },

      borderRadius: {
        ...spacing0to100,
      },

      spacing: {
        ...spacing0to500,
      },

      maxWidth: {
        ...spacing0to500,
      },

      minWidth: {
        spacing0to500,
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
