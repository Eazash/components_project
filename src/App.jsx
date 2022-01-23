import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Items from './components/items/Items'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/Products' element={<Items />} />
    </Routes>
  );
}

export default App;
