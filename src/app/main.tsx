import ReactDOM from "react-dom";
import "./globals.css";
import WelcomePage from "./pages/WelcomePage/welcomePage";
import LoginPage from "./pages/LoginPage/loginPage";
// import Search from "./components/Search/search";
// import Login from "./components/Login/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/WelcomePage" element={<WelcomePage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
