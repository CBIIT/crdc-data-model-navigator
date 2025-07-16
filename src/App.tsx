import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { ThemeProvider, CssBaseline } from "@mui/material";
import routeConfig from "./router";
import StyledNotistackAlerts from "./components/StyledNotistackAlerts";
import theme from "./theme";

const router = createBrowserRouter(routeConfig);

const App = () => (
  <ThemeProvider theme={theme}>
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={10000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      Components={{
        default: StyledNotistackAlerts,
        error: StyledNotistackAlerts,
        success: StyledNotistackAlerts,
      }}
      hideIconVariant
      preventDuplicate
    >
      <CssBaseline />
      <RouterProvider router={router} />
    </SnackbarProvider>
  </ThemeProvider>
);
export default App;
