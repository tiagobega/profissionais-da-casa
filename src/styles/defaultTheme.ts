export const defaultTheme = {
  color: {
    brand: {
      purple: "#3F2E4D",
      yellowLight: "#f8d974",
      pinkLight: "#EF9CB1",
      orange: "#FF8F69",
    },
    secondary: {
      tealDark: "#00BDAB",
      lightTeal: "#00BDAB",
      lighterYellow: "#FFEBC9",
      yellow: "#FFD945",
      darkPink: "#FFA6D6",
      brown: "#7A3D3D",
      blue: "#2D74E6",
      green: "#054F52",
    },
    base: {
      100: "#F1F0F0",
      200: "#D8D6D5", //secundário1
      300: "#A4A4A4", //hovering
      400: "#787878", //preencher
      500: "#222", //text
    },
    hover: {
      orange: "#ff7c4f",
      purple: "#332142",
    },
  },
  transition: {
    short: "200ms",
    long: "400ms",
  },
  sizes: {
    pageWidth: "1170px",
    pageMarginY: "32px",
  },
} as const;
