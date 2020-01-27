import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(true);
    const toggleMode = e => {
        e.preventDefault();
        console.log('dark mode clicked')
        setDarkMode(!darkMode);
    };
    return (
        <nav className="navbar">
            <h1>Women's World Cup Players</h1>
            <div className="dark-mode-info">
            <h2>Toggle Dark Mode</h2>
                <div className={darkMode ? "dark-mode__toggled" : "dark-mode__toggle"}>
                <div
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                    >{ darkMode? 'On': 'Off' }</div>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;