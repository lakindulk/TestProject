import React from "react";
import Addform from "../src/Pages/Addform";
import Viewform from "../src/Components/Viewform";

import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BRouter>
    <Routes>
      <Route exact path="/" element={<Addform />} />
      <Route exact path="/" element={<Viewform />} />

      
    </Routes>
    
    </BRouter>
  );
}

export default App;
