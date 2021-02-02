import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserPageTemplate from './UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
    padding: 25px 150px 25px 70px;
    max-width: 50vw;
    position: relative;

    @media (max-width: 1200px) {
        max-width: 80vw;
    }
`;

const StyledPageHeader = styled.div`
    margin: 25px 0 50px 0;
`;

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

const StyledLink = styled.a`
    display: block;
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: ${({ theme }) => theme.bold};
    text-transform: uppercase;
    text-decoration: underline;
    margin: 25px 0 0 0;
`;

const StyledImage = styled.img`
    position: absolute;
    right: 120px;
    top: 25px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
`;

const StyledButton = styled(Button)`
    margin: 50px 0 0 0;
`;

const DetailsTemplate = ({ title, created, content, articleUrl, twitterName, pageContext }) => {
    return (
        <>
            <UserPageTemplate>
                <StyledWrapper>
                    <StyledPageHeader>
                        <StyledHeading big>{title}</StyledHeading>
                        <StyledParagraph>{created}</StyledParagraph>
                    </StyledPageHeader>
                    <Paragraph>{content}</Paragraph>
                    {pageContext === 'articles' && (
                        <StyledLink href={articleUrl}>Open article</StyledLink>
                    )}
                    {pageContext === 'twitters' && (
                        <StyledImage
                            alt={twitterName}
                            src="https://turbologo.com/articles/wp-content/uploads/2019/07/twitter-bird-logo.png.webp"></StyledImage>
                    )}
                    <StyledButton activeColor={pageContext}>CLOSE / SAVE</StyledButton>
                </StyledWrapper>
            </UserPageTemplate>
        </>
    );
};

DetailsTemplate.propTypes = {
    pageContext: PropTypes.string.isRequired,
    title: PropTypes.string,
    created: PropTypes.string,
    content: PropTypes.string,
    articleUrl: PropTypes.string,
    twitterName: PropTypes.string
};

DetailsTemplate.defaultProps = {
    title: '',
    created: '',
    content: '',
    articleUrl: '',
    twitterName: ''
};

export default withContext(DetailsTemplate);
