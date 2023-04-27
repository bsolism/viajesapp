import { createTheme } from "@mui/material/styles";
import colors from "./Colors";

const fontSize = 14;
const htmlFontSize = 16;
const coef = fontSize / 14;

export default createTheme({
  palette: {
    blueLight: {
      main: "#cfe8fc",
    },
    grayLight: {
      main: "#d4d4d4",
    },
  },
  typography: {
    width: "100%",
    border: "1px solid",
    pxToRem: (size) => `${(size / htmlFontSize) * coef}rem`,
    title: {
      fontSize: 18,
      fontWeight: "bold",
    },
    text: {
      fontSize: 12,
    },
    textThird: {
      fontSize: 10,
    },
    TitleNumberOnline: {
      fontSize: 18,
      color: "green",
      fontWeight: "bold",
    },
    TitleNumberOffline: {
      fontSize: 18,
      color: "red",
      fontWeight: "bold",
    },
    TitleSmall: {
      fontSize: 12,
      fontWeight: "bold",
    },
    TitleSmallSecond: {
      fontSize: 12,
      fontWeight: "bold",
      color: colors.dimGray,
    },
    textLegend: {
      fontSize: 10,
      fontWeight: "bold",
      color: colors.white,
      marginBottom: 10,
    },
    titleAccord: {
      fontSize: 10,
      fontWeight: "bold",
      color: colors.dimGray,
      width: "33%",
      flexShrink: 0,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1Bold: "h6",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: colors.darkGray,
          },
        },
      },
      variants: [
        {
          props: { variant: "add-device" },
          style: {
            backgroundColor: colors.bgMainBlue,
            color: colors.white,
            borderRadius: "5px",
          },
          "&:hover": {
            backgroundColor: "red",
          },
        },
        {
          props: { variant: "filter" },
          style: {
            backgroundColor: colors.bgMainBlue,
            color: colors.white,
            borderRadius: "5px",
            marginLeft: 20,
          },
          "&:hover": {
            backgroundColor: "red",
          },
        },
        {
          props: { variant: "date-Picker" },
          style: {
            backgroundColor: colors.bgMainBlue,
            color: colors.white,
            borderRadius: "5px",
          },
          "&:hover": {
            backgroundColor: "red",
          },
        },
      ],
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: "date-picker" },
          style: {
            borderRadius: "50%",
          },
        },
      ],
    },
  },
});
