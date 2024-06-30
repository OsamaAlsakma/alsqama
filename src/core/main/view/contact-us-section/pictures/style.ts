import { Swiper } from "swiper/react";
import styled from "styled-components";
import { mediumScreenSize } from "~/bootstrap/helper/global-helper";

export const MainContactUsPicturesSwiper = styled(Swiper)`
  border-radius: 16px;
  height: 405px;
  width: 33%;
  @media (max-width: ${mediumScreenSize}) {
    width: 100%;
  }
`;
