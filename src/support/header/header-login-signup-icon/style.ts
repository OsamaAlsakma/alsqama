import { IconButton } from "@mui/material";
import styled from "styled-components";

export const StyledHeaderLoginSignupIcon = styled(IconButton)`
  && {
    padding: 0;
    color: white;
    display: none;
    font-size: 36px;
    @media (max-width: 1024px) {
      && {
        display: flex;
      }
    }
  }
`;
