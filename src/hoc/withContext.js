import React from 'react';
import PageContext from './../context';

const withContext = (Component) => {
    return (props) => (
        <PageContext.Consumer>
            {(pageContext) => (
                <Component
                    {...props}
                    pageContext={pageContext.pageType}
                    themeToggler={pageContext.themeToggler}
                    isDarkTheme={pageContext.isDarkTheme}></Component>
            )}
        </PageContext.Consumer>
    );
};

export default withContext;
