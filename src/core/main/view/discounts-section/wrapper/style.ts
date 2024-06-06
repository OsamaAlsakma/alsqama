import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { HandlingSectionPaddingWrapper } from "~/bootstrap/helper/global-styles";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import {
  primaryColor,
  largeScreenSize,
} from "~/bootstrap/helper/global-helper";

export const StyledMainDiscountsSwiper = styled(Swiper)`
  width: 48%;
  height: 440px;
  border-radius: 8px;
`;

export const StyledMainDiscountsSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 8px;
`;

export const StyledMainDiscountsSwiperImage = styled(CardMedia)`
  border-radius: 8px;
`;

export const StyledMainDiscountsTitle = styled.h3`
  font-size: 32px;
`;

export const StyledMainDiscountsSubtitle = styled.p`
  font-size: 24px;
  line-height: 2;
  text-align: justify;
`;

export const StyledMainDiscountsTitleAndSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 16px;
`;

export const StyledHandlingSectionPaddingWrapper = styled(
  HandlingSectionPaddingWrapper
)`
  background-color: ${primaryColor};
  display: grid;
  gap: 30px;

  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${largeScreenSize}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MainDiscountsSwipersWrapper = styled.div`
  display: flex;
`;
