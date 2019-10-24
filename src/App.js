import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import './App.less'

function App() {
  return (
    <div className="App">
      <div className='left'>
        <NavLeft />
      </div>
      <div className="right">
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default App;
