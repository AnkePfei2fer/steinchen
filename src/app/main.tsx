import ReactDOM from "react-dom";
import "./globals.css";
import WelcomePage from "./pages/WelcomePage/welcomePage";
import LoginPage from "./pages/LoginPage/loginPage";
import SearchPage from "./pages/SearchPage/searchPage";
import SearchResultPage from "./pages/SearchResultPage/searchResultPage";
import SetsPage from "./pages/SetsPage/setsPage";
import DetailsPage from "./pages/DetailsPage/detailsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/result" element={<SearchResultPage />} />
      <Route path="/sets" element={<SetsPage />} />
      <Route path="/details/:numberSet" element={<DetailsPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
