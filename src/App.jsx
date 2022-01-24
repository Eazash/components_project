import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
