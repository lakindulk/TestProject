import React from "react";
import Addform from "../src/Pages/Addform";

import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BRouter>
    <Routes>
      <Route exact path="/" element={<Addform />} />
    </Routes>
    
    </BRouter>
  );
}

export default App;
