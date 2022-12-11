import { Main } from "components/layouts";
import { SlotGames } from "pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main>asd</Main>} />
        <Route path="/slot-games" element={<Main><SlotGames /></Main>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;