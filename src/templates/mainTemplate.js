import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import GlobalStyles from 'theme/GlobalStyle';
import PageContext from 'context';

class MainTemplate extends Component {
    state = {
        pageType: 'notes'
    };

    setCurrentPage = (prevState = '') => {
        const pages = ['notes', 'twitters', 'articles'];

        const {
            location: { pathname }
        } = this.props;

        const [currentPage] = pages.filter((page) => pathname.includes(page));

        if (currentPage !== prevState.pageType) this.setState({ pageType: currentPage });
    };

    componentDidMount() {
        this.setCurrentPage();
    }

    componentDidUpdate(prevProps, prevState) {
        this.setCurrentPage(prevState);
    }

    render() {
        const { pageType } = this.state;
        const { children } = this.props;

        return (
            <PageContext.Provider value={pageType}>
                <>
                    <GlobalStyles />
                    {children}
                </>
            </PageContext.Provider>
        );
    }
}

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.object.isRequired
};

export default withRouter(MainTemplate);
