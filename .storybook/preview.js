import GlobalStyles from '../src/theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/mainTheme';

// Global decorator to apply the styles to all stories
export const decorators = [
    (Story) => (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        </>
    )
];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' }
};
