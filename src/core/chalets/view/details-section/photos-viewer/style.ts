import CardMedia from "@mui/material/CardMedia/CardMedia";
import styled from "styled-components";
import {
  largeScreenSize,
  smallScreenSize,
} from "~/bootstrap/helper/global-helper";
import { StyledSwiper } from "~/core/main/view/slides/style";

/* ------------------------- First position styling ------------------------- */
export const ChaletsDetailsPhotoAllImagesWrapper = styled.div`
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  gap: 8px;
  height: 500px;
  @media (max-width: ${largeScreenSize}) {
    display: none;
  }
`;

export const ChaletsDetailsPhotoMainImage = styled(CardMedia)`
  width: 50%;
  height: 100%;
`;

export const ChaletsDetailsPhotoSmallImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 50%;
  justify-content: space-between;
  row-gap: 8px;
`;

export const ChaletsDetailsPhotoSmallImage = styled(CardMedia)`
  height: 50%;
  width: 49.45%;
  object-fit: cover;
`;

/* ------------------------- Second position styling ------------------------ */
export const DetailsPhotoViewerSwiper = styled(StyledSwiper)`
  border-radius: 16px;
  overflow: hidden;
  display: none;
  height: 500px;
  @media (max-width: ${largeScreenSize}) {
    display: block;
  }
  @media (max-width: ${smallScreenSize}) {
    height: 350px;
  }
`;

/* --------------------------------- Footer --------------------------------- */
export const DetailsPhotoViewerFooter = styled.div`
  margin-top: 4px;
`;
