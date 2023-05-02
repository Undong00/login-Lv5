import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Write from "../pages/Write";
import Check from "../pages/Check";
import Detail from "../pages/Detail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/write" element={<Write />} />
        <Route path="/work" element={<Check />} />
        <Route path="/work/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
