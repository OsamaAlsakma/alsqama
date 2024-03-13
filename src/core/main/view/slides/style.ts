import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import * as palette from "./../../../../bootstrap/helper/global-helper";

export const StyledSwiperSlide = styled(SwiperSlide)`
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: calc(100vh - ${palette.appHeaderHeight});
`;

const overlayColor = "rgba(31, 13, 45, 0.61)";

export const TransparentOverlayLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${overlayColor};
`;
