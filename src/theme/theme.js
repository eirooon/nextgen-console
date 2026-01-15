import { createTheme } from "@mui/material/styles";

export const ARC_NAV_BG = "#001A70";
export const ARC_ACCENT = "#6f53ff";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: ARC_ACCENT },
    background: { default: "#f6f7fb", paper: "#ffffff" },
    text: { primary: "#111827", secondary: "rgba(0,0,0,0.6)" },
  },
  shape: { borderRadius: 12 },
  typography: {
  fontFamily: [
    "Inter",
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    '"Segoe UI"',
    "Roboto",
    "Helvetica",
    "Arial",
  ].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { 
          backgroundColor: "#F6F8FC",
          fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
         },
        "@media (prefers-reduced-motion: reduce)": {
          "*": {
            animationDuration: "0.01ms !important",
            animationIterationCount: "1 !important",
            transitionDuration: "0.01ms !important",
            scrollBehavior: "auto !important",
          },
        },
      },
    },


    // Header glass effect
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "transparent",
          backdropFilter: "blur(10px)",
          boxShadow: "none",
        },
      },
    },

    // Sidebar gradient + remove border
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: ARC_NAV_BG,
          color: "rgba(255,255,255,0.92)",
          borderRight: "none",
        },
      },
    },

    // Make list buttons feel “designed”
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 6,
        },
      },
    },
  },
});
