import React from 'react';
import { useDarkMode } from '../hooks/UseDarkMode';

const Navbar = () => {
    const [ darkMode, setDarkMode ] = useDarkMode();

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <nav className="navbar">
            <h1>Female Soccer Players</h1>
            <div className="dark-mode_toggle">
                <div
                   onClick={toggleMode}
                   className={darkMode ? 'toggle toggled' : 'toggle'}
                /> 
            </div>
        </nav>
    );
};

export default Navbar;