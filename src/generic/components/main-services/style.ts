import styled from "styled-components";
import AppButton from "../app-button/app-button";
import { Link } from "react-router-dom";
import { primaryColor } from "~/bootstrap/helper/global-helper";

export const StyledMainServicesAppButton = styled(AppButton)<{
  isSelected: boolean;
}>`
  && {
    font-size: 20px;
    font-family: Tajawal;
    color: ${({ isSelected }) => (isSelected ? `${primaryColor}` : "black")};
  }
`;

export const StyledMainServicesLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
