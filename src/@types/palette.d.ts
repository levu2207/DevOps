import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    header: {
      main: string;
      background: string;
      contrastText: string;
    };
  }

  interface PaletteOptions {
    header: {
      main: string;
      background: string;
      contrastText: string;
    };
  }
}
