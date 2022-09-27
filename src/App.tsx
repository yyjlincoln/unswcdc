import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppFrame } from "./pages/AppFrame";
import { NotFound } from "./pages/NotFound";
import { Main } from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppFrame />}>
          <Route path="" element={<Main />}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
