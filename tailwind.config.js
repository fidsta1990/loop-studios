module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        alata: ["Alata"],
      },
      letterSpacing: {
        widest: ".3em",
      },
      backgroundImage: {
        "hero-desktop-image":
          "url('../images/desktop/image-hero.jpg')",
        "hero-mobile-image":
          "url('../images/mobile/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
