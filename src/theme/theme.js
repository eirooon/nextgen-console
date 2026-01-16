import { createTheme } from "@mui/material/styles";

export const ARC_NAV_BG = "#001A70";
export const ARC_ACCENT = "#6f53ff";

export const theme = createTheme({
  palette: {
    mode: "light",
    background: { default: "#f6f7fb", paper: "#ffffff" },
    primary: {
      light: "#BB86FC",
      main: "#8A2BFF",
      dark: "#640FCD",
      contrastText: "#fff",
    },
    secondary: {
      light: "#66C8E9",
      main: "#00729A",
      dark: "#0A5F7C",
      contrastText: "#FFFFFF",
    },
  },
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
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
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
          borderRadius: 4,
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

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          borderColor: "#eeeeee",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          paddingBottom: "0px",
        },
        title: {
          fontWeight: 600,
          fontSize: 20,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          "&:last-child": {
            paddingBottom: 16, // set whatever you want
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
