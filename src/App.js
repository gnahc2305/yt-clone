import React from 'react';
import { Sidebar, Header, Content, Card } from './components/Index';
import Home from './components/Home';


function App() {
  return (
      <div className="flex">
        <Sidebar />
        <Home />
      </div>
  );
}

export default App;
