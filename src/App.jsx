import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import Items from './components/items/Items'
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path='/Products' element={<Items />} />
      </Routes>
    </div>
  );
}

export default App;
