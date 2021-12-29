import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Counter from "./pages/Counter";
import Pokemon from "./pages/Pokemon";
import Forms from "./pages/Forms";

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
//redux

function App() {
  return (
    <div className="App">
      <Header /> 
      <img src={logo} className="App-logo" alt="logo" />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </div>
  );
}

export default App;
