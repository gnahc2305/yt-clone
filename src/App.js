import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="flex">
        <Sidebar />
        <Header />
      </div>
    </div>
  );
}

export default App;
