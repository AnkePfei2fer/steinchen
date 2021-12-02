import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./globals.css";
// import App from "./App";
import LoginPage from "./pages/LoginPage/loginPage";
import Search from "./components/Search/search";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />}>
        <Route path="/pages/search/" element={<Search />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
