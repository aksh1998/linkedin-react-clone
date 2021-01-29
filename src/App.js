import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Slidebar from './components/Slidebar/Slidebar'
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Slidebar />
      </div>
    </div>
  );
}

export default App;
