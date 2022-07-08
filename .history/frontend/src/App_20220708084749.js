import React from "react";
import Addform from "../src/Pages/Addform";
import Viewagenda from "../src/Pages/Viewagenda"

import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BRouter>
      <Routes>
        <Route exact path="/" element={<Addform />} />
        <Route exact path="/view" element={<Viewagenda />} />


      </Routes>

    </BRouter>
  );
}

export default App;
