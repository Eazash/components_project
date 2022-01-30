import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import Items from './components/items/Items'
import Checkout from "./components/checkout";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path='/Products' element={<Items />} />
        <Route path='/checkout' element={<Checkout />}/>
      </Routes>
    </div>
  );
}

export default App;
