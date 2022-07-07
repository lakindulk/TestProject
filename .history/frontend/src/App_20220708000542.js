import React from "react";
import Agendaform from "../src/Components/Agendaform";

import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BRouter>
    <Routes>
      <Route exact path="/" element={<Agendaform />} />
    </Routes>
    
    </BRouter>
  );
}

export default App;
