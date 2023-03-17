import { Nav } from "@components/Nav";
import { Card } from "@pages/Card";
import { Home } from "@pages/Home";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@app/store";
import "@styles/App.scss";

export const App = () => {
  const card = useSelector((state: RootState) => state.card);
  return (
    <div className="app">
      <Nav card={card} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card card={card} />} />
      </Routes>
    </div>
  );
};
