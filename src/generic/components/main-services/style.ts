import styled from "styled-components";
import AppButton from "../app-button/app-button";
import { Link } from "react-router-dom";

export const StyledMainServicesAppButton = styled(AppButton)<{
  $isSelected: boolean;
}>`
  && {
    font-size: 20px;
    font-family: Tajawal;
    color: ${({ $isSelected }) => ($isSelected ? "#DAA520" : "black")};
    font-weight: ${({ $isSelected }) => ($isSelected ? "bolder" : "")};
  }
`;

export const StyledMainServicesLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
