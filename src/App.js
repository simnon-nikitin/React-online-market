import React, { useState } from "react";
//import 'App.scss'
import Header from "./components/Header/Header";

function App() {

  const state = useState(0)
    
  return (
    <div className="container">
  <Header/>
  </div>
  );
}

export default App;
