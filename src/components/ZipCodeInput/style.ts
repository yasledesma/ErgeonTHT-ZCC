import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00b900",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  status: {
    error: {
      color: "#d32f2f",
      fontWeight: "600",
    },
    warning: {
      color: "#ed6c02",
      fontWeight: "500",
    },
    info: {
      color: "#00b900",
      fontWeight: "500",
    },
    success: {
      color: "#00b900",
      fontWeight: "600",
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#00b900",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#00b900",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "#ffffff",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#00b900",
        },
      },
    },
  },
});

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      error: {
        color: string;
        fontWeight: string;
      };
      warning: {
        color: string;
        fontWeight: string;
      };
      info: {
        color: string;
        fontWeight: string;
      };
      success: {
        color: string;
        fontWeight: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status: {
      error?: {
        color: string;
        fontWeight: string;
      };
      warning?: {
        color: string;
        fontWeight: string;
      };
      info?: {
        color: string;
        fontWeight: string;
      };
      success?: {
        color: string;
        fontWeight: string;
      };
    };
  }
}

export default theme;
