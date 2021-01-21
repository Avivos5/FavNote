import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
    padding: 25px 150px 25px 70px;
`;

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 85px;
    margin-top: 50px;
`;

const StyledPageHeader = styled.div``;

const StyledHeading = styled(Heading)`
    margin: 25px 0 0 0;

    ::first-letter {
        text-transform: uppercase;
    }
`;
const StyledParagraph = styled(Paragraph)`
    margin: 0;
    font-weight: ${({ theme }) => theme.bold};
`;

const GridTemplate = ({ children, pageType }) => (
    <>
        <UserPageTemplate pageType={pageType}>
            <StyledWrapper>
                <StyledPageHeader>
                    <Input search placeholder="search" />
                    <StyledHeading big as="h1">
                        {pageType}
                    </StyledHeading>
                    <StyledParagraph>5 notes</StyledParagraph>
                </StyledPageHeader>
                <StyledGrid>{children}</StyledGrid>
            </StyledWrapper>
        </UserPageTemplate>
    </>
);

GridTemplate.propTypes = {
    children: PropTypes.array.isRequired,
    pageType: PropTypes.oneOf(['notes', 'twitters', 'articles'])
};

GridTemplate.deafultProps = {
    pageType: 'notes'
};

export default GridTemplate;