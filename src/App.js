import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
