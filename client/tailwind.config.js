module.exports = {
  theme: {
    extend: {
      animation: {
        typewriter: 'typewriter 2s steps(11) forwards',
        caret: 'blink 1s steps(11) infinite',
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
