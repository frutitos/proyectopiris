// PÁGINA PRINCIPAL
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './lib/sidebar.jsx';
import './lib/sidebar.css';
// import ABM from './abm/index'; // Importa el componente ABM
// import Pedidos from './pedidos/index'; // Suponiendo que tienes un componente Pedidos

function App() {
  const updateContent = (content) => {
    console.log(content);
  };

  return (
    <Router>
      <div className='main-container'>
        <Sidebar updateContent={updateContent} />
        <div className="container">
          <iframe src="/" frameborder="0"></iframe>
        </div>
      </div>
    </Router>
  );
}

export default App;
