import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box/Box";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import langKey from "~/bootstrap/i18n/langKey";
import { ReviewType } from "~/core/chalets/page/chalet-details-page";
import ChaletsDetailsInfoTabsBookingCancellingConditions from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/info-tabs/chalets-details-info-tabs-booking-cancelling-conditions";
import ChaletsDetailsInfoTabsfeatures from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/info-tabs/chalets-details-info-tabs-features";
import ChaletsDetailsInfoTabsMap from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/info-tabs/chalets-details-info-tabs-map";
import ChaletsDetailsInfoTabsReviews from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/info-tabs/chalets-details-info-tabs-reviews";
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
    cancellingConditions: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    reviews: ReviewType[];
  };
}

const ChaletsDetailsInfoTabs = (props: IChaletsDetailsInfoTabsProps) => {
  const { infoTabs } = props;
  const {
    features,
    bookingConditions,
    cancellingConditions,
    coordinates,
    reviews,
  } = infoTabs;
  const [value, setValue] = useState("1");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const { t } = useTranslation();
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
            <DetailsInfoTabsTab
              label={t(langKey.detailsPage.features)}
              value="1"
            />
            <DetailsInfoTabsTab
              label={t(langKey.detailsPage.conditions)}
              value="2"
            />
            <DetailsInfoTabsTab label={t(langKey.detailsPage.map)} value="3" />
            <DetailsInfoTabsTab
              label={t(langKey.detailsPage.reviews)}
              value="4"
            />
          </DetailsInfoTabsTabList>
        </Box>
        <TabPanel value="1">
          <ChaletsDetailsInfoTabsfeatures features={features} />
        </TabPanel>
        <TabPanel value="2">
          <ChaletsDetailsInfoTabsBookingCancellingConditions
            bookingConditions={bookingConditions}
            cancellingConditions={cancellingConditions}
          />
        </TabPanel>
        <TabPanelMapPadding value="3">
          <ChaletsDetailsInfoTabsMap coordinates={coordinates} />
        </TabPanelMapPadding>
        <TabPanel value="4">
          <ChaletsDetailsInfoTabsReviews reviews={reviews} />
        </TabPanel>
      </TabContext>
    </DetailsInfoTabsBox>
  );
};

export default ChaletsDetailsInfoTabs;
