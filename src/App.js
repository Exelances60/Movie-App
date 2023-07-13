import { useContext } from "react";
import "./App.css";
import { MovieApiContext } from "./context/MovieApi";
import NavigationBar from "./componets/NavigationBar/NavigationBar";
import HomePage from "./componets/HomePage/HomePage";

function App() {
  const { setQuery } = useContext(MovieApiContext);

  return (
    <div className="App">
      <NavigationBar setQuery={setQuery}></NavigationBar>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
