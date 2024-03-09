import HeaderTabsVM from "./header-tabs-vm";

const HeaderTabs = () => {
  const vm = new HeaderTabsVM().useVM();
  return (
    <div>
      {vm.props.headerTabs.map((tab) => (
        <span key={tab} style={{ backgroundColor: "red" }}>
          {tab}
        </span>
      ))}
    </div>
  );
};

export default HeaderTabs;
