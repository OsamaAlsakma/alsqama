import styled from "styled-components";
import * as palette from "./../../../bootstrap/helper/global-helper";

export const StyledMainHeader = styled.div`
  background-color: ${palette.primaryColor};

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: white;

  padding: 0 ${palette.paddingBigScreens};
  height: ${palette.appHeaderHeight};

  @media (max-width: 768px) {
    padding: 0 ${palette.paddingMediumScreens};
  }

  @media (max-width: 480px) {
    padding: 0 ${palette.paddingSmallScreens};
  }
`;
