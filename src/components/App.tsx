import React from 'react';

import Header from './Header/Header'
import Principal from './Principal/Principal'

import './Reset.css';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <h1 className="title">Bem vindo a Lista Rango</h1>
      <Principal/>
    </div>
  );
}

export default App;
