/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        // Título: de arriba hacia abajo
        slideInTop: {
          "0%":   { opacity: "0", transform: "translateY(-100px)" },
          "75%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        // Texto/cards: de izquierda a derecha
        slideInLeft: {
          "0%":   { opacity: "0", transform: "translateX(-100px)" },
          "75%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        // Imagen: de derecha a izquierda
        slideInRight: {
          "0%":   { opacity: "0", transform: "translateX(100px)" },
          "75%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        // Botones: de abajo hacia arriba
        slideInBottom: {
          "0%":   { opacity: "0", transform: "translateY(100px)" },
          "75%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "slide-top":    "slideInTop    0.7s ease-out forwards",
        "slide-left":   "slideInLeft   0.7s ease-out forwards",
        "slide-right":  "slideInRight  0.7s ease-out forwards",
        "slide-bottom": "slideInBottom 0.7s ease-out forwards",
      }
    }
  },
  plugins: [],
}