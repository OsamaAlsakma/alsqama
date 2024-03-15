import styled from "styled-components";
import * as pallete from "../../../../bootstrap/helper/global-helper";

export const MainPageSlideDescription = styled.div`
  position: absolute;
  top: 50%;
  color: white;
  right: 5%;
  transform: translateY(-50%);
  width: 45%;
  font-size: 36px;

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const MainPageSlideDescriptionTitle = styled.span`
  display: block;
  font-size: 48px;
  padding-bottom: 8px;
  font-weight: bold;
  color: ${pallete.secondaryColor};
`;
