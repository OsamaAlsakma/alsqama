import TabPanel from "@mui/lab/TabPanel";
import { Map } from "@pbe/react-yandex-maps";
import styled from "styled-components";
import * as palette from "~/bootstrap/helper/global-helper";
import StarIcon from "@mui/icons-material/Star";
import TabList from "@mui/lab/TabList/TabList";
import Tab from "@mui/material/Tab/Tab";
import Box from "@mui/material/Box/Box";

/* -------------------------------------------------------------------------- */
/*                                  All Tabs                                  */
/* -------------------------------------------------------------------------- */
export const DetailsInfoTabsBox = styled(Box)`
  width: calc(50% - 20px);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid black;
  @media (max-width: ${palette.mediumScreenSize}) {
    width: 100%;
  }
`;

export const DetailsInfoTabsTabList = styled(TabList)`
  && {
    display: flex;
    justify-content: center;
    margin: 0px 4px;
    .MuiTabs-indicator {
      background-color: transparent;
    }
  }
`;

export const DetailsInfoTabsTab = styled(Tab)`
  && {
    border-radius: 16px;
    color: black;
    min-width: fit-content;
    padding: 12px;
    font-family: Tajawal;
    margin: 4px;
    font-size: 16px;
    &.Mui-selected {
      background-color: ${palette.primaryColor};
      color: white;
      text-decoration: none;
      border-bottom: none;
    }
  }
`;

export const StyledInfoTabTitle = styled.h2`
  color: ${palette.primaryColor};
`;

/* -------------------------------------------------------------------------- */
/*                                  Features                                  */
/* -------------------------------------------------------------------------- */
export const DetailsInfoTabsFeatureWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  line-height: 2;
`;

export const DetailsInfoTabsFeatureIcon = styled(StarIcon)`
  color: ${palette.primaryColor};
`;

/* -------------------------------------------------------------------------- */
/*                              Booking canceling                             */
/* -------------------------------------------------------------------------- */
export const StyledBookingCancellingConditionsIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 8px;
`;

export const StyledBookingCancelingConditionsTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const BookingCancelingConditionsEdgeCase = styled.p`
  text-align: center;
`;

/* -------------------------------------------------------------------------- */
/*                                     Map                                    */
/* -------------------------------------------------------------------------- */
export const TabPanelMapPadding = styled(TabPanel)`
  && {
    padding: 0px;
  }
`;

export const ChaletsDetailsInfoTabsStyledMap = styled(Map)`
  && {
    width: 100%;
    height: 400px;
  }
`;
