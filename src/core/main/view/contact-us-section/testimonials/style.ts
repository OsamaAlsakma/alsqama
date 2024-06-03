import { styled } from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  mediumScreenSize,
  smallScreenSize,
  secondaryColor,
  largeScreenSize,
} from "~/bootstrap/helper/global-helper";

const commonProps = `
position: absolute;
top: 50%;
transform: translateY(-50%);
background-color: transparent;
border: 3px solid white;
border-radius: 50%;
cursor: pointer;
color: white;
padding: 8px;
&& {
  @media (max-width: ${mediumScreenSize}) {
    width: 14px;
    height: 14px;
    padding: 6px;
  }
  @media (max-width: ${smallScreenSize}) {
    display: none
  }
}

&:hover {
  border-color: ${secondaryColor};
  color: ${secondaryColor};
}
`;

export const CustomPrevButton = styled(ArrowForwardIosIcon)`
  ${commonProps}
`;

export const CustomNextButton = styled(ArrowBackIosNewIcon)`
  ${commonProps}
`;

export const MainContactUsTestimonialsSwiper = styled(Swiper)`
  width: 70%;
  align-self: center;
  @media (max-width: ${largeScreenSize}) {
    width: 60%;
  }
  @media (max-width: ${mediumScreenSize}) {
    width: 100%;
  }
`;
export const MainContactUsTestimonialsSlideSwiper = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: white;
  margin: auto;

  @media (max-width: ${largeScreenSize}) {
    flex-direction: column;
  }
`;

export const MainContactUsTestimonialsTitleAndTestimonial = styled.div`
  width: fit-content;
  max-width: 35%;
  @media (max-width: ${largeScreenSize}) {
    max-width: 85%;
    text-align: center;
  }
`;

export const MainContactUsTestimonialsTitle = styled.h3`
  font-size: 26px;
  margin: 8px 0;
`;

export const MainContactUsTestimonialsTestimonial = styled.p`
  font-size: 20px;
`;

export const MainContactUsTestimonialsImage = styled(CardMedia)`
  width: 185px;
  height: 185px;

  object-fit: cover;
  border-radius: 50%;
  @media (max-width: ${largeScreenSize}) {
    width: 125px;
    height: 125px;
  }

  @media (max-width: ${mediumScreenSize}) {
    width: 150px;
    height: 150px;
  }
`;
