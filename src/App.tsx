import { Home } from "./pages/Home/index";
import { Routes, Route, Link } from "react-router-dom";

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
