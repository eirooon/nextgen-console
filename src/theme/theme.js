import { createTheme } from "@mui/material/styles";

export const ARC_NAV_BG = "#001A70";

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
    fontFamily: ["Inter", "sans-serif", "Roboto", "Helvetica", "Arial"].join(),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Inter, sans-serif, Roboto, Helvetica, Arial",
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

    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "transparent",
          boxShadow: "none",
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: ARC_NAV_BG,
          color: "rgba(255,255,255,0.92)",
          borderRight: "none",
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 4,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          borderColor: "#eeeeee",
          padding: "8px",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          paddingBottom: "0px",
        },
        title: {
          fontSize: "1.25rem",
          fontWeight: 700,
        },
        subheader: {
          fontSize: "0.875rem",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          "&:last-child": {
            paddingBottom: 16,
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
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "14px",
        },
      },
    },

    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: "none",
          height: "calc(100vh - 137px)",
        },
        filler: {
          bgColor: "#333",
        },
      },
    },
  },
});
