import styled from "styled-components";
import * as pallete from "../../../../bootstrap/helper/global-helper";

export const MainPageSlideDescription = styled.div`
  width: 45%;
  position: absolute;
  top: 50%;
  font-size: 36px;
  color: white;
  right: 5%;
  transform: translateY(-50%);
`;

export const MainPageSlideDescriptionTitle = styled.span`
  display: block;
  font-size: 48px;
  padding-bottom: 8px;
  font-weight: bold;
  color: ${pallete.secondaryColor};
`;
