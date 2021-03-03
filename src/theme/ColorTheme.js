import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'theme/mainTheme';
import { useDarkMode } from 'hooks/useDarkMode';

export const ColorThemeContext = React.createContext();

const ColorTheme = ({ children }) => {
    const [theme, themeToggler, mountedComponent] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!mountedComponent) return <div />;

    return (
        <ColorThemeContext.Provider value={{ theme, themeToggler, mountedComponent }}>
            <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
        </ColorThemeContext.Provider>
    );
};

ColorTheme.propTypes = {
    children: PropTypes.element.isRequired
};

export default ColorTheme;
