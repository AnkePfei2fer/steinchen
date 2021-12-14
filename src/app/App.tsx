import { Route, Routes } from "react-router-dom";
import { Set } from "./types";
import useCollection from "./utils/useCollection";
import SetsPage from "./pages/SetsPage/setsPage";
import DetailsPage from "./pages/DetailsPage/detailsPage";
import WelcomePage from "./pages/WelcomePage/welcomePage";
import LoginPage from "./pages/LoginPage/loginPage";
import SearchPage from "./pages/SearchPage/searchPage";
import SearchResultPage from "./pages/SearchResultPage/searchResultPage";

function App() {
  const sets = useCollection();
  console.log({ sets });
  const collection: Set[] = sets.usersets;

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/result" element={<SearchResultPage />} />
      <Route path="/sets" element={<SetsPage collection={collection} />} />
      <Route
        path="/sets/:id"
        element={<DetailsPage collection={collection} />}
      />
    </Routes>
  );
}

export default App;
