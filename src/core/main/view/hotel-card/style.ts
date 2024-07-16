import Card from "@mui/material/Card/Card";
import CardActions from "@mui/material/CardActions/CardActions";
import Typography from "@mui/material/Typography/Typography";
import styled from "styled-components";
import { secondaryColor } from "~/bootstrap/helper/global-helper";
import { StyledMainAppButton } from "~/bootstrap/helper/global-styles";

export const StyledCard = styled(Card)`
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  margin: 6px;
`;

export const StyledMainHotelCardButton = styled(StyledMainAppButton)`
  width: 100%;
  padding-top: 10px !important;
`;

export const StyledMainHotelCardNumberOfHotels = styled.span`
  background-color: ${secondaryColor};
  font-family: tajawal;
  padding: 4px 8px;
  padding-top: 8px;
  font-size: 14px;
  border-radius: 8px;
  margin: 0 4px;
`;

export const StyledMainHotelCardCardActions = styled(CardActions)`
  && {
    padding: 8px;
    padding-top: 0px;
  }
`;

export const MainPageAccomendationDescription = styled(Typography)`
  overflow: hidden;
  height: 62px;
  text-overflow: clip;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.5;
  text-align: justify;
`;
