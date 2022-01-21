import { Route, Routes } from "react-router-dom";
import useCollection from "./utils/useCollection";
import SetsPage from "./pages/SetsPage/setsPage";
import DetailsPage from "./pages/DetailsPage/detailsPage";
import WelcomePage from "./pages/WelcomePage/welcomePage";
import LoginPage from "./pages/LoginPage/loginPage";
import SearchPage from "./pages/SearchPage/searchPage";
import SearchResultPage from "./pages/SearchResultPage/searchResultPage";
import BricksPage from "./pages/BricksPage/bricksPage";
import MinifigPage from "./pages/MinifigPage/minifigPage";
import IdeasPage from "./pages/IdeasPage/ideasPage";
import summarizeBricks from "./utils/summarizeBricks";
import summarizeMinifigs from "./utils/summarizeMinifigs";

function App() {
  const { collection, refresh } = useCollection();
  const { bricksList, summarize } = summarizeBricks();
  const { minifigsList, summarizeMinifig } = summarizeMinifigs();
  console.log({ bricksList });
  console.log({ minifigsList });

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/welcome"
        element={
          <WelcomePage
            onLoadSet={refresh}
            onLoadBricks={summarize}
            onLoadMinifigs={summarizeMinifig}
          />
        }
      />
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
      <Route path="/bricks" element={<BricksPage />} />
      <Route path="/minifigs" element={<MinifigPage />} />
      <Route path="/ideas" element={<IdeasPage collection={collection} />} />
    </Routes>
  );
}

export default App;
