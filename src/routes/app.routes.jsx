import { Routes, Route } from "react-router-dom";

import { New } from "../pages/New";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Preview } from "../pages/Preview";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/New" element={<New/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/Preview/:id" element={<Preview/>}/>

    </Routes>
  )
}



