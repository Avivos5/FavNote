import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Sidebar from 'components/organisms/Sidebar/Sidebar';
import { useMediaPredicate } from 'react-media-hook';

const StyledWrapper = styled.div`
    padding-left: 150px;

    @media (max-width: 700px) {
        padding-left: 0;
    }
`;

const UserPageTemplate = ({ children }) => {
    const lessThan700Width = useMediaPredicate('(max-width: 700px)');
    const lessThan450Height = useMediaPredicate('(max-height : 450px)');

    return (
        <StyledWrapper>
            <Sidebar isMobile={lessThan700Width} isMobileHeight={lessThan450Height} />
            {children}
        </StyledWrapper>
    );
};

UserPageTemplate.propTypes = {
    children: PropTypes.element.isRequired
};

export default UserPageTemplate;
