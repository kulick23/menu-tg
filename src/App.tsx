import React from 'react';
import './App.css';
import Menu from "./components/menu/menu";


const App: React.FC = () => {
  return (
      <div className="app">
        <Menu />  {/* Отображаем компонент Menu */}
      </div>
  );
}

export default App;
