import { Main } from "components/layouts";
import { urls } from "config";
import { LiveCasinoGames, SlotGames } from "pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {  

  return (
    <BrowserRouter>
      <Routes>
        <Route path={urls.liveCasinoGames} element={<Main><LiveCasinoGames /></Main>} />
        <Route path={urls.slotGames} element={<Main><SlotGames /></Main>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;