import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';

const MainTemplate = ({ children }) => (
    <>
        <GlobalStyles />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
);

export default MainTemplate;

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired
};
