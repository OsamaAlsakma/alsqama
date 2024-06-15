import { Button } from "@mui/material";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import styled from "styled-components";
import {
  largeScreenSize,
  mainFontFamily,
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
  margin: -53px 20px 0px 0px;
  display: flex;
  gap: 8px;
`;

const commonIconStyle = `
&:hover {
  background-color: #ffffff29;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
background-color: #00000073;
border-radius: 8px;
color: white;
font-weight: bold;
font-size: 14px;
padding: 9px 10px 5px;
display: flex;
gap: 8px;
font-family: ${mainFontFamily};
`;

export const DetailsPhotoViewerFooterButton = styled(Button)`
  && {
    ${commonIconStyle}
  }
`;

export const DetailsPhotoViewerFooterButtonVideo = styled.a`
  && {
    transition: all ease-in-out 0.2s;
    ${commonIconStyle}
    text-decoration: none;
    align-items: center;
  }
`;
