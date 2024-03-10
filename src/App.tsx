import { Route, Routes } from "react-router";
import "./App.css";
import MainHeader from "./support/header/main-header/main-header";
import MainPage from "./core/main/page/main-page";
import ChaletsPage from "./core/chalets/page/chalets-page";
import HallsPage from "./core/halls/page/halls-page";
import ResortsPage from "./core/resorts/page/resorts-page";
import HotelsPage from "./core/hotels/page/hotels-page";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/chalets" element={<ChaletsPage />} />
        <Route path="/halls" element={<HallsPage />} />
        <Route path="/resorts" element={<ResortsPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
      </Routes>
    </>
  );
}

export default App;
