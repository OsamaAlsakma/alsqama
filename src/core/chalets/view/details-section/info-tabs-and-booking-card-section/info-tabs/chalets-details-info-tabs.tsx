import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box/Box";
import { useState } from "react";
import ChaletsDetailsInfoTabsBookingCancellingConditions from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/info-tabs/chalets-details-info-tabs-booking-cancelling-conditions";
import ChaletsDetailsInfoTabsfeatures from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/info-tabs/chalets-details-info-tabs-features";
import ChaletsDetailsInfoTabsMap from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/info-tabs/chalets-details-info-tabs-map";
import {
  DetailsInfoTabsBox,
  DetailsInfoTabsTab,
  DetailsInfoTabsTabList,
  TabPanelMapPadding,
} from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/info-tabs/style";

interface IChaletsDetailsInfoTabsProps {
  infoTabs: {
    features: string[];
    bookingConditions: string;
    cancelingConditions: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
}

const ChaletsDetailsInfoTabs = (props: IChaletsDetailsInfoTabsProps) => {
  const { infoTabs } = props;
  const { features, bookingConditions, cancelingConditions, coordinates } =
    infoTabs;
  const [value, setValue] = useState("1");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <DetailsInfoTabsBox>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <DetailsInfoTabsTabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            variant="fullWidth"
            centered={true}
          >
            <DetailsInfoTabsTab label="ميزات" value="1" />
            <DetailsInfoTabsTab label="شروط" value="2" />
            <DetailsInfoTabsTab label="الخريطة" value="3" />
            <DetailsInfoTabsTab label="تقيمات" value="4" />
          </DetailsInfoTabsTabList>
        </Box>
        <TabPanel value="1">
          <ChaletsDetailsInfoTabsfeatures features={features} />
        </TabPanel>
        <TabPanel value="2">
          <ChaletsDetailsInfoTabsBookingCancellingConditions
            bookingConditions={bookingConditions}
            cancelingConditions={cancelingConditions}
          />
        </TabPanel>
        <TabPanelMapPadding value="3">
          <ChaletsDetailsInfoTabsMap coordinates={coordinates} />
        </TabPanelMapPadding>
        <TabPanel value="4">Revews</TabPanel>
      </TabContext>
    </DetailsInfoTabsBox>
  );
};

export default ChaletsDetailsInfoTabs;
