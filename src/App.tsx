import { Route, Routes } from "react-router";
import "./App.css";
import MainHeader from "./support/header/main-header/main-header";
import MainPage from "./core/main/page/main-page";
import ChaletsPage from "./core/chalets/page/chalets-page";
import HallsPage from "./core/halls/page/halls-page";
import ResortsPage from "./core/resorts/page/resorts-page";
import HotelsPage from "./core/hotels/page/hotels-page";
import { servicesPageEndpoint } from "./bootstrap/helper/endpoints";
import * as palette from "~/bootstrap/helper/global-helper";
import styled from "styled-components";

const PagesPaddedWrapper = styled.div`
  padding-top: ${palette.appHeaderHeight};
`;

function App() {
  return (
    <>
      <MainHeader />
      <PagesPaddedWrapper>
        <Routes>
          <Route path={servicesPageEndpoint.main} element={<MainPage />} />
          <Route
            path={servicesPageEndpoint.chalets}
            element={<ChaletsPage />}
          />
          <Route path={servicesPageEndpoint.halls} element={<HallsPage />} />
          <Route path={servicesPageEndpoint.hotels} element={<HotelsPage />} />
          <Route
            path={servicesPageEndpoint.resorts}
            element={<ResortsPage />}
          />
        </Routes>
      </PagesPaddedWrapper>
    </>
  );
}

export default App;
