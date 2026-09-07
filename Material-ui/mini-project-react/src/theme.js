import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",

    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,

    allVariants: {
      color: "#000000",
      letterSpacing: 0,
    },

    statLabel: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },

    statValue: {
      fontSize: "1.875rem",
      fontWeight: 700,
      lineHeight: 1.3,
    },

    authHeroTitle: {
      fontSize: "44px",
      fontWeight: 700,
      lineHeight: "58px",
    },

    authPageTitle: {
      fontSize: "34px",
      fontWeight: 700,
      lineHeight: "46px",
      color: "#210E32",
    },

    authSubtitle: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "26px",
      color: "rgba(33, 14, 50, 0.6)",
    },

    authBody: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "30px",
    },
  },

  palette: {
    primary: {
      main: "#EAF4F7",
    },

    secondary: {
      main: "#4299E1",
    },

    accent: {
      main: "#4BA0CB",
      dark: "#2F7BA3",
    },

    background: {
      default: "#FFFFFF",
      subtle: "#EAF4F7",
      auth: "#F5FAFB",
    },

    text: {
      primary: "#000000",
      sidebar: "#210E32",
      sidebarMuted: "rgba(33, 14, 50, 0.6)",
    },
  },

  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          width: "24px",
          height: "24px",
          fontSize: "24px",
        },
      },
    },
  },
});

export default theme;