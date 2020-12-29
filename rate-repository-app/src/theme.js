import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    appBarBackground: "#24292e",
    appBarText: "#FFFFFF",
    inputBorder: "#D3D3D3",
    inputError: "#d73a4a",
    buttonDisabled: "#C0C0C0",
    buttonEnabled: "#0366d6",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    inputError: 10,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "Sans-serif",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
