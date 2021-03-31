import { createContext, useState } from 'react';

export const ThemeContext = createContext('light');

const lightTheme = {
    primary: '#fff',
    secondary: '#eee',
    tertiary: '#ccc',
    white: '#fff',
    black: '#000'
};

const darkTheme = {
    primary: '#202020',
    secondary: '#3d3d3d',
    tertiary: '#606060',
    white: '#000',
    black: '#fff'
};

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [currentPalette, setCurrentPalette] = useState(lightTheme);

    function toggleTheme(theme) {
        setTheme(current => current === 'light' ? 'dark' : 'light');
        setCurrentPalette(theme === 'light' ? darkTheme : lightTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, currentPalette }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;