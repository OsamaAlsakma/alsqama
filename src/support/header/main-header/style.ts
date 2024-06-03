import styled from "styled-components";
import {
  paddingBigScreens,
  appHeaderHeight,
  mediumScreenSize,
  paddingMediumScreens,
  smallScreenSize,
  paddingSmallScreens,
} from "~/bootstrap/helper/global-helper";

export const FixedHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9000;
`;

export const StyledMainHeader = styled.div`
  background-color: white;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: white;

  padding: 0 ${paddingBigScreens};
  height: ${appHeaderHeight};

  @media (max-width: ${mediumScreenSize}) {
    padding: 0 ${paddingMediumScreens};
  }

  @media (max-width: ${smallScreenSize}) {
    padding: 0 ${paddingSmallScreens};
  }
`;

export const StyledLocalizationAndLoginSignup = styled.div`
  display: flex;
  align-items: center;
`;
