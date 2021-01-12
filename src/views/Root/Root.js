import React from 'react';
import Button from 'components/atoms/Button/Button';
import GlobalStyles from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';

const Root = () => (
    <>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
            <>
                <h1>Hello World</h1>
                <Button>Close / Save</Button>
                <Button secondary>Remove</Button>
            </>
        </ThemeProvider>
    </>
);

export default Root;
