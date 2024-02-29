import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <button className="connect-button">Connect</button>
      <div className="window">
        {/* Window content */}
        <button className="new-button">New Button Inside Window</button>
      </div>
    </div>
  );
}

export default App;
