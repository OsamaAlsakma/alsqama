import styled from "styled-components";
import { StyledMainServicesLink } from "~/generic/components/main-services/style";

export const StyledServicesBurger = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
`;

export const StyledServicesBurgerIconButton = styled.div`
  font-size: 36px;
  color: black;
  padding: 0;
  display: flex;
`;

export const StyledBurgerMenuItem = styled(StyledMainServicesLink)`
  color: black;
  padding: 0 16px;
  font-family: Tajawal;
`;
