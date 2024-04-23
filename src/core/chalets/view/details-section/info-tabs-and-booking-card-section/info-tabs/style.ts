import TabPanel from "@mui/lab/TabPanel";
import { Map } from "@pbe/react-yandex-maps";
import styled from "styled-components";

/* -------------------------------------------------------------------------- */
/*                                  All Tabs                                  */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                              Booking canceling                             */
/* -------------------------------------------------------------------------- */
export const DetailsInfoTabsBookingCancelingConditions = styled.div`
  margin-bottom: 12px;
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
