import styled from "styled-components";
import HeaderTabsVM from "./header-tabs-vm";
import Button from "@mui/material/Button/Button";

export const StyledHeaderTab = styled(Button)`
  margin: 0 8px;
`;

const HeaderTabs = () => {
  const vm = new HeaderTabsVM().useVM();
  return (
    <div>
      {vm.props.headerTabs.map((tab, index) => (
        <StyledHeaderTab key={index}>{tab}</StyledHeaderTab>
      ))}
    </div>
  );
};

export default HeaderTabs;
