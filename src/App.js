import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Counter from "./pages/Counter";
import Pokemon from "./pages/Pokemon";

import { Routes, Route, Link } from "react-router-dom";
//form
//redux

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/pokemon">Find Pokemon</Link>

        <Routes>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/pokemon" element={<Pokemon />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
