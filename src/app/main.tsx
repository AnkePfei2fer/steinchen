import ReactDOM from "react-dom";
import "./globals.css";
import WelcomePage from "./pages/WelcomePage/welcomePage";
import LoginPage from "./pages/LoginPage/loginPage";
import SearchPage from "./pages/SearchPage/searchPage";
import SearchResultPage from "./pages/SearchResultPage/searchResultPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/result" element={<SearchResultPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
