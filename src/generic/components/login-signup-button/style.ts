import styled from "styled-components";
import AppButton from "../app-button/app-button";
import { secondaryColor } from "~/bootstrap/helper/global-helper";

export const StyledLoginSignupButton = styled(AppButton)`
  && {
    background-color: white;
    color: black;
    gap: 4px;
    font-size: 16px;

    @media (max-width: 1024px) {
      display: none;
    }

    &:hover {
      background-color: ${secondaryColor};
    }
  }
`;
