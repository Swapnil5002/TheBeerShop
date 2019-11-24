import React from 'react'
import './App.css'
import Head from './pages/head/head.jsx'
import Beer from './pages/beer/beer.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Head />
        <Beer />
      </header>
    </div>
  );
}

export default App;
