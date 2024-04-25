import TabPanel from "@mui/lab/TabPanel";
import { Map } from "@pbe/react-yandex-maps";
import styled from "styled-components";
import * as palette from "~/bootstrap/helper/global-helper";

/* -------------------------------------------------------------------------- */
/*                                  All Tabs                                  */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                              Booking canceling                             */
/* -------------------------------------------------------------------------- */
export const StyledBookingCancellingConditionsTitle = styled.h2`
  color: ${palette.primaryColor};
`;

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
