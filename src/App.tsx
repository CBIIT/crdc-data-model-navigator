import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import routeConfig from "./router";
import theme from "./theme";

const router = createBrowserRouter(routeConfig);

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
);
export default App;
