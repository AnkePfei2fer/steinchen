import ReactDOM from "react-dom";
import "./globals.css";
import WelcomePage from "./pages/WelcomePage/welcomePage";
import LoginPage from "./pages/LoginPage/loginPage";
import SearchPage from "./pages/SearchPage/searchPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Welcome" element={<WelcomePage />} />
      <Route path="/Search" element={<SearchPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
