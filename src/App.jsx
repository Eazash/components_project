import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import Items from "./components/items/Items";
import UpdateForm from "./pages/updateform";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Items />} />
        <Route path="/Products/update/:id" element={<UpdateForm />} />
      </Routes>
    </div>
  );
}

export default App;
