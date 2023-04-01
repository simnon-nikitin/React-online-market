import React, { useState } from "react";
import Header from "./components/Header/Header";
import './components/Header/Header.sass' 
function App() {

  const state = useState(0)
    
  return (
  <Header/>
  );
}

export default App;
