import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Friends from './component/Friends/Friends';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Friends></Friends>
    </div>
  );
}

export default App;
