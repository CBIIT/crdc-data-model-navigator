import { FC, ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material";
import { SearchParamsProvider } from "../components/Contexts/SearchParamsContext";

const StyledWrapper = styled("main")({
  minHeight: "400px",
  overflowX: "hidden",
});

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <SearchParamsProvider>
    <Helmet defaultTitle="CRDC Data Model Navigator">
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href={
          "https://fonts.googleapis.com/css2?" +
          "family=Open+Sans:wght@400;600;700&" +
          "family=Poppins:wght@400;600;700&" +
          "family=Lato:wght@300;400;500;600;700&" +
          "family=Inter:wght@300;400;500;600;700&" +
          "family=Nunito+Sans:wght@400;500;600;700;800;900&" +
          "family=Nunito:wght@300;400;500;600;700;800;900&" +
          "family=Public+Sans:wght@300;400;500;600;700&" +
          "family=Rubik:wght@300;400;500;600;700&" +
          "family=Roboto:wght@400&" +
          "display=swap"
        }
        rel="stylesheet"
      />
    </Helmet>
    <StyledWrapper>{children || <Outlet />}</StyledWrapper>
  </SearchParamsProvider>
);

export default Layout;
