import styled from "styled-components";
import AppButton from "../app-button/app-button";
import { Link } from "react-router-dom";

export const StyledMainServicesAppButton = styled(AppButton)`
  && {
    font-size: 20px;
    font-family: Tajawal;
  }
`;

export const StyledMainServicesLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
