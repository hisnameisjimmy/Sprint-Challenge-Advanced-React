import React from 'react';
import DarkMode from '../Hooks/DarkMode.js';

const Navbar = () => {

    const [ darkMode, setDarkMode, toggleDarkMode ] = DarkMode(false);
    return (
      <header>
        <h1>World Cup</h1>
        <button onClick={toggleDarkMode}>Dark Mode</button>
      </header>
    );
}

export default Navbar;