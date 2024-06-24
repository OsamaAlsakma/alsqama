import { Route, Routes } from "react-router";
import "./App.css";
import styled from "styled-components";
import ChaletDetailsPage from "~/core/chalets/page/chalet-details-page";
import HotelItemsPage from "~/core/hotels/page/hotel-items-page";
import HotelItemDetailsPage from "~/core/hotels/page/hotel-item-details-page";
import HallsPage from "~/core/halls/page/halls-page";
import HallDetailsPage from "~/core/halls/page/hall-details-page";
import {
  servicesPageEndpoint,
  supportEndpoint,
} from "~/bootstrap/helper/endpoints";
import ChaletsPage from "~/core/chalets/page/chalets-page";
import HotelsPage from "~/core/hotels/page/hotels-page";
import MainPage from "~/core/main/page/main-page";
import MainHeader from "~/support/header/main-header/main-header";
import ApartmentsPage from "~/core/Apartments/page/apartments-page";
import TermOfUsePage from "~/support/pages/term-of-use/term-of-use-page";
import { appHeaderHeight } from "~/bootstrap/helper/global-helper";
import SelectedTabCTX from "~/generic/context/selected-tab-ctx";
import di from "~/bootstrap/di";
import PrivacyPolicyPage from "~/support/pages/privacy-policy/privacy-policy-page";
import OpenLoginSignUpModalCTX from "~/generic/context/open-login-signup-modal-ctx";
import AppartmentDetailsPage from "~/core/Apartments/page/appartment-details-page";

const PagesPaddedWrapper = styled.div`
  padding-top: ${appHeaderHeight};
`;

function App() {
  const { Provider: SelectTabProvider } = di.resolve(SelectedTabCTX);
  const { Provider: OpenModlaProvider } = di.resolve(OpenLoginSignUpModalCTX);
  return (
    <>
      <SelectTabProvider>
        <OpenModlaProvider>
          <MainHeader />
          <PagesPaddedWrapper>
            <Routes>
              {/* Main */}
              <Route path={servicesPageEndpoint.main} element={<MainPage />} />
              {/* Apartments */}
              <Route
                path={servicesPageEndpoint.apartments}
                element={<ApartmentsPage />}
              />
              <Route
                path={`${servicesPageEndpoint.apartments}/:id`}
                element={<AppartmentDetailsPage />}
              />
              {/* Halls */}
              <Route
                path={servicesPageEndpoint.halls}
                element={<HallsPage />}
              />
              <Route
                path={`${servicesPageEndpoint.halls}/:id`}
                element={<HallDetailsPage />}
              />
              {/* Chalets */}
              <Route
                path={servicesPageEndpoint.chalets}
                element={<ChaletsPage />}
              />
              <Route
                path={`${servicesPageEndpoint.chalets}/:id`}
                element={<ChaletDetailsPage />}
              />

              {/* Hotels */}
              <Route
                path={servicesPageEndpoint.hotels}
                element={<HotelsPage />}
              />
              <Route
                path={`${servicesPageEndpoint.hotels}/:id`}
                element={<HotelItemsPage />}
              />
              <Route
                path={`${servicesPageEndpoint.hotels}/:id/:id`}
                element={<HotelItemDetailsPage />}
              />
              {/* Term of use */}
              <Route
                path={`${supportEndpoint.termsOfUse}`}
                element={<TermOfUsePage />}
              />
              {/* Privacy policy */}
              <Route
                path={`${supportEndpoint.privacyPolicy}`}
                element={<PrivacyPolicyPage />}
              />
            </Routes>
          </PagesPaddedWrapper>
        </OpenModlaProvider>
      </SelectTabProvider>
    </>
  );
}

export default App;
