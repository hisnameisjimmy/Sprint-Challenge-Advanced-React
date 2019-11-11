import React, { useState, useEffect } from 'react';

const DarkMode = (value) => {
    const [darkMode, setDarkMode] = useState(value);

    const toggleDarkMode = e => {
        e.preventDefault();
        return darkMode ? setDarkMode(false) : setDarkMode(true);
    }

    useEffect(() => {
        if (darkMode === true) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode])

    return [ darkMode, setDarkMode, toggleDarkMode ];
};

export default DarkMode;