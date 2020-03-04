import React from 'react';

import './Reset.css';
import './App.css';

import Header from './Header/Header'
import Principal from './Principal/Principal'

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
