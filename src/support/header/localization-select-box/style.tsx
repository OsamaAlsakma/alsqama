import styled from "styled-components";
import LanguageIcon from "@mui/icons-material/Language";
import { GlobalStyles } from "@mui/material";

export const StyledHeaderLocalizationWrapper = styled.div`
  display: flex;

  && {
    @media (max-width: 1024px) {
      display: none;
    }
  }
`;

export const StyledHeaderLocalizationIcon = styled(LanguageIcon)`
  && {
    font-size: 36px;
  }
`;

export const GlobalStylesComponent = () => (
  <GlobalStyles
    styles={{
      body: {
        paddingRight: "0px !important",
        overflow: "auto !important",
      },
    }}
  />
);
