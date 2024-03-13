import styled from "styled-components";
import AppButton from "../app-button/app-button";
import * as palette from "./../../../bootstrap/helper/global-helper";

export const StyledLoginSignupButton = styled(AppButton)`
  && {
    background-color: white;
    color: black;
    gap: 4px;
    font-size: 16px;

    &:hover {
      background-color: ${palette.secondaryColor};
    }
  }
`;
