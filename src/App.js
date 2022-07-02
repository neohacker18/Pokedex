import "./App.css";
import { GetNames } from "./components/GetNames";
import Navbar from "./components/Navbar";
import SearchPokemon from "./components/SearchPokemon";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<SearchPokemon />} />
          <Route exact path="/names" element={<GetNames />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
