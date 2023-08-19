import "./App.scss";
import Sidebar from "./Components/Sidebar/Sidebar";
import CardContainer from "./Containers/CardContainer";
import beers from "./Data/Data";
import BeerShowCard from "./BeerShowCard/BeerShowCard";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <BeerShowCard beer={beers[0]} />
    </div>
  );
}

export default App;
