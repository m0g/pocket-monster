import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Favorites from "./Favorites";
import Home from "./Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}
