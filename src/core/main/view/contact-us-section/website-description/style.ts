import styled from "styled-components";
import { mediumScreenSize } from "~/bootstrap/helper/global-helper";

export const WebisteDescriptionTitle = styled.h3`
  font-size: 28px;
  text-align: center;
`;

export const WebisteDescriptionText = styled.p`
  font-size: 20px;
  line-height: 1.5;
  text-align: justify;
`;

export const WebisteDescriptionContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 33%;
  @media (max-width: ${mediumScreenSize}) {
    width: 100%;
  }
`;
