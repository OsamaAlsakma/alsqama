import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box/Box";
import Tab from "@mui/material/Tab/Tab";
import { useState } from "react";
import styled from "styled-components";
import * as palette from "~/bootstrap/helper/global-helper";
import StarIcon from "@mui/icons-material/Star";

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

const DetailsInfoTabsBox = styled(Box)`
  width: calc(50% - 20px);
  border-radius: 16px;
  border: 1px solid black;
  @media (max-width: ${palette.mediumScreenSize}) {
    width: 100%;
  }
`;

const DetailsInfoTabsTabList = styled(TabList)`
  && {
    display: flex;
    justify-content: center;
    margin: 0px 4px;
    .MuiTabs-indicator {
      background-color: transparent;
    }
  }
`;

const DetailsInfoTabsTab = styled(Tab)`
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

const DetailsInfoTabsFeatureWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  line-height: 2;
`;

const DetailsInfoTabsFeatureIcon = styled(StarIcon)`
  color: ${palette.primaryColor};
`;

const DetailsInfoTabsBookingCancelingConditions = styled.div`
  margin-bottom: 12px;
`;

const ChaletsDetailsInfoTabs = (props: IChaletsDetailsInfoTabsProps) => {
  const { infoTabs } = props;
  const { features, bookingConditions, cancelingConditions } = infoTabs;
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
          {features.map((feature) => (
            <DetailsInfoTabsFeatureWrapper>
              <DetailsInfoTabsFeatureIcon /> {feature}
            </DetailsInfoTabsFeatureWrapper>
          ))}
        </TabPanel>
        <TabPanel value="2">
          <DetailsInfoTabsBookingCancelingConditions>
            {bookingConditions}
          </DetailsInfoTabsBookingCancelingConditions>
          <div>{cancelingConditions}</div>
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Three</TabPanel>
      </TabContext>
    </DetailsInfoTabsBox>
  );
};

export default ChaletsDetailsInfoTabs;
