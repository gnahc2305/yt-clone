import React, { useState } from "react";
import { Sidebar } from "./components/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("New");


  return (
    <div className="flex">
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div>
        <Header />
        <Content selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}

export default App;
