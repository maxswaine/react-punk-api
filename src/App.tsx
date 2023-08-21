import "./App.scss";
import Sidebar from "./Components/Sidebar/Sidebar";
import CardContainer from "./Containers/CardContainer";
import beers from "./Data/Data";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <CardContainer beers={beers} />
    </div>
  );
}

export default App;
