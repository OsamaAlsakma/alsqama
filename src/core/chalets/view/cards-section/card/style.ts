import Card from "@mui/material/Card/Card";
import CardActions from "@mui/material/CardActions/CardActions";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import styled from "styled-components";
import * as palette from "~/bootstrap/helper/global-helper";
import { StyledMainAppButton } from "~/bootstrap/helper/global-styles";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const ChaletsCardsCardActions = styled(CardActions)`
  && {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    padding-top: 0;
  }
`;

export const ChaletsCardsCardActionsButton = styled(StyledMainAppButton)`
  && {
    flex: 1;
    margin: 0;
    line-height: 1.5;
    padding-top: 9px;
  }
`;
export const ChaletsCardsCardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
`;

export const ChaletsCardsCardTitle = styled.span`
  color: ${palette.primaryColor};
  font-size: 22px;
  font-weight: bold;
`;

export const ChaletsCardsCardRatingWrapper = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
`;

export const ChaletsCardsCardStarIcon = styled(StarIcon)`
  color: ${palette.secondaryColor};
`;

export const ChaletsCardsCardFeaturesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
`;

export const ChaletsCardsCardFeature = styled.span`
  width: 48%;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ChaletsCardsCardFeatureTitle = styled.span`
  padding-top: 7px;
  line-height: 0.8;
`;

export const StyledChaletsCardsCard = styled(Card)`
  && {
    /* max-width: 355px; */
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
    width: 32%;
    @media (max-width: ${palette.largeScreenSize}) {
      width: 48%;
    }

    @media (max-width: ${palette.smallScreenSize}) {
      width: 100%;
    }
  }
`;

export const StyledChaletsCardsCardMedia = styled(CardMedia)`
  && {
    height: 190px;
  }
`;

export const ChaletsCardsCardRatingStars = styled.span`
  padding-top: 9px;
`;

export const ChaletsCardsCardFeatureIcon = styled.img`
  width: 24px;
`;

/* -------------------------------------------------------------------------- */
/*                           ChaletsCardsCardImages                           */
/* -------------------------------------------------------------------------- */
export const ChaletsCardsCardImagesSwiper = styled(Swiper)`
  height: 100%;
  width: 100%;
`;

export const ChaletsCardsCardImagesSwiperSlide = styled(SwiperSlide)`
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

const commonProps = `
color: white;
  position: absolute;
  transform: translateY(-50%);
  padding: 2px;
  border: 2px white solid;
  border-radius: 100%;
`;

export const ChaletsCardsCardImagesPrevButton = styled(ArrowForwardIosIcon)`
  ${commonProps};
  top: 65%;
`;

export const ChaletsCardsCardImagesNextButton = styled(ArrowBackIosNewIcon)`
  ${commonProps};
  top: 66%;
`;
