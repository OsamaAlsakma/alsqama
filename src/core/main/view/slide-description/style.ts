import styled from "styled-components";
import * as pallete from "../../../../bootstrap/helper/global-helper";

export const MainPageSlideDescription = styled.div`
  position: absolute;
  top: 50%;
  color: white;
  transform: translateY(-50%);
  width: 45%;
  font-size: 36px;
  right: 7%;

  @media (max-width: 1024px) {
    width: 60%;
    font-size: 32px;
    right: 9%;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    right: 11%;
  }

  @media (max-width: 480px) {
    width: 80%;
    font-size: 18px;
    right: 5%;
  }
`;

export const MainPageSlideDescriptionTitle = styled.span`
  display: block;
  padding-bottom: 8px;
  font-weight: bold;
  color: ${pallete.secondaryColor};
  font-size: 48px;

  @media (max-width: 1024px) {
    font-size: 42px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;
