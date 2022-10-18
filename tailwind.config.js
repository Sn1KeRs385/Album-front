const spacing0to100px = Object.fromEntries(
  Array.from({ length: 101 }).map((_, index) => [`${index}px`, `${index}px`])
)

module.exports = {
  prefix: 'tw-',

  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  important: true,
  theme: {
    extend: {
      borderWidth: {
        ...spacing0to100px,
      },

      borderRadius: {
        ...spacing0to100px,
      },

      spacing: {
        ...spacing0to100px,
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
