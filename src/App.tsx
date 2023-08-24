import "./App.scss";
import { Beer } from "./Data/Types";
import PresentationCard from "./Components/PresentationCard/PresentationCard";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  const getSingleBeer = async (id: number) => {
    const response = await fetch(`https://api.punkapi.com/v2/beers?ids=${id}`);
    const data: Beer[] = await response.json();
    return data[0];
  };

  return (
    <HashRouter basename="/">
      <Routes>
        <Route
          path="/beers/:id/"
          element={<PresentationCard getSingleBeer={getSingleBeer} />}
        />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
