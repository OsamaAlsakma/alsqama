import Card from "@mui/material/Card/Card";
import styled from "styled-components";
import * as palette from "~/bootstrap/helper/global-helper";

export const StyledHotelsCardsCard = styled(Card)`
  && {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
    width: calc(25% - 20px);
    height: fit-content;

    @media (max-width: ${palette.extraLargeScreenSize}) {
      width: calc(32% - 20px);
    }

    @media (max-width: ${palette.largeScreenSize}) {
      width: calc(50% - 20px);
    }

    @media (max-width: ${palette.mediumScreenSize}) {
      width: 100%;
    }
  }
`;

/* -------------------------------------------------------------------------- */
/*                            HotelsCardsCardBody                            */
/* -------------------------------------------------------------------------- */
export const HotlesCardsCardFeaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4px;
`;

export const HotelsCardsCardFeature = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
`;
