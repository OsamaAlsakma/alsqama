import styled from "styled-components";
import AppButton from "~/generic/components/app-button/app-button";

export const StyledHeaderLoginSignupIcon = styled(AppButton)`
  && {
    display: none;
    @media (max-width: 1024px) {
      display: block;
    }
  }
`;
