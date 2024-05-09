import { Route, Routes } from "react-router";
import "./App.css";
import MainHeader from "./support/header/main-header/main-header";
import MainPage from "./core/main/page/main-page";
import ChaletsPage from "./core/chalets/page/chalets-page";
import ResortsPage from "./core/resorts/page/resorts-page";
import HotelsPage from "./core/hotels/page/hotels-page";
import { servicesPageEndpoint } from "./bootstrap/helper/endpoints";
import * as palette from "~/bootstrap/helper/global-helper";
import styled from "styled-components";
import ChaletDetailsPage from "~/core/chalets/page/chalet-details-page";
import HotelItemsPage from "~/core/hotels/page/hotel-items-page";
import HotelItemDetailsPage from "~/core/hotels/page/hotel-item-details-page";
import HallsPage from "~/core/halls/page/halls-page";

const PagesPaddedWrapper = styled.div`
  padding-top: ${palette.appHeaderHeight};
`;

function App() {
  return (
    <>
      <MainHeader />
      <PagesPaddedWrapper>
        <Routes>
          {/* Main */}
          <Route path={servicesPageEndpoint.main} element={<MainPage />} />
          {/* Chalets */}
          <Route
            path={servicesPageEndpoint.chalets}
            element={<ChaletsPage />}
          />
          {/* Halls */}
          <Route path={servicesPageEndpoint.halls} element={<HallsPage />} />
          <Route
            path={`${servicesPageEndpoint.halls}/:id`}
            element={<span>detail</span>}
          />
          {/* Hotels */}
          <Route path={servicesPageEndpoint.hotels} element={<HotelsPage />} />
          <Route
            path={`${servicesPageEndpoint.hotels}/:id`}
            element={<HotelItemsPage />}
          />
          <Route
            path={`${servicesPageEndpoint.hotels}/:id/:id`}
            element={<HotelItemDetailsPage />}
          />
          {/* Retreats */}
          <Route
            path={servicesPageEndpoint.resorts}
            element={<ResortsPage />}
          />
          <Route
            path={`${servicesPageEndpoint.chalets}/:id`}
            element={<ChaletDetailsPage />}
          />
        </Routes>
      </PagesPaddedWrapper>
    </>
  );
}

export default App;
