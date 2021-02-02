import React from 'react';
import PageContext from 'context';

const withContext = (Component) => {
    return (props) => (
        <PageContext.Consumer>
            {(pageContext) => <Component {...props} pageContext={pageContext}></Component>}
        </PageContext.Consumer>
    );
};

export default withContext;
