import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import GlobalStyles from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'theme/mainTheme';
import PageContext from 'context';

class MainTemplate extends Component {
    state = {
        pageType: 'notes',
        colorTheme: lightTheme
    };

    setCurrentPage = (prevState = '') => {
        const pages = ['notes', 'twitters', 'articles'];

        const {
            location: { pathname }
        } = this.props;

        const [currentPage] = pages.filter((page) => pathname.includes(page));

        if (currentPage !== prevState.pageType) this.setState({ pageType: currentPage });
    };

    getTheme = () => {
        const localTheme = window.localStorage.getItem('theme');
        if (localTheme) {
            this.setTheme(localTheme);
        } else this.setTheme('lightTheme');
    };

    setTheme = (mode) => {
        window.localStorage.setItem('theme', mode);
        const newTheme = mode === 'lightTheme' ? lightTheme : darkTheme;
        this.setState({ colorTheme: newTheme });
    };

    themeToggler = () =>
        this.state.colorTheme == darkTheme
            ? this.setTheme('lightTheme')
            : this.setTheme('darkTheme');

    componentDidMount() {
        this.setCurrentPage();
        this.getTheme();
    }

    componentDidUpdate(prevProps, prevState) {
        this.setCurrentPage(prevState);
    }

    render() {
        const { pageType, colorTheme } = this.state;
        const { children } = this.props;
        const checkDarkTheme = colorTheme == darkTheme ? true : false;

        return (
            <PageContext.Provider
                value={{
                    pageType,
                    themeToggler: this.themeToggler,
                    isDarkTheme: checkDarkTheme
                }}>
                <ThemeProvider theme={colorTheme}>
                    <>
                        <GlobalStyles />
                        {children}
                    </>
                </ThemeProvider>
            </PageContext.Provider>
        );
    }
}

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.object.isRequired
};

export default withRouter(MainTemplate);
