import { Route, Routes } from "react-router-dom";
import useCollection from "./utils/useCollection";
import SetsPage from "./pages/SetsPage/setsPage";
import DetailsPage from "./pages/DetailsPage/detailsPage";
import WelcomePage from "./pages/WelcomePage/welcomePage";
import LoginPage from "./pages/LoginPage/loginPage";
import SearchPage from "./pages/SearchPage/searchPage";
import SearchResultPage from "./pages/SearchResultPage/searchResultPage";
import BricksPage from "./pages/BricksPage/bricksPage";

function App() {
  const { collection, refresh } = useCollection();

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/welcome" element={<WelcomePage onLoadSet={refresh} />} />
      <Route path="/search" element={<SearchPage />} />
      <Route
        path="/result"
        element={<SearchResultPage onLoadSet={refresh} />}
      />
      <Route path="/sets" element={<SetsPage collection={collection} />} />
      <Route
        path="/sets/:id"
        element={<DetailsPage collection={collection} onLoadSet={refresh} />}
      />
      <Route path="/sets" element={<BricksPage collection={collection} />} />
    </Routes>
  );
}

export default App;
