import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import linkImg from '../../../assets/icons/link.svg';

const StyledWrapper = styled.div`
    min-height: 380px;
    /* width: 500px; // do usunięcia */
    box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
    border-radius: 10px;
    overflow: hidden;
    display: grid;
    grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
    padding: 17px 30px;
    background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
    position: relative;

    :first-of-type {
        z-index: 999;
    }

    ${({ flex }) =>
        flex &&
        css`
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        `}
`;

const StyledHeading = styled(Heading)`
    margin: 5px 0 0;
`;

const DateInfo = styled(Paragraph)`
    margin: 0 0 5px;
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: ${({ theme }) => theme.bold};
`;

const StyledAvatar = styled.div`
    width: 85px;
    height: 85px;
    border: 6px solid ${({ theme }) => theme.twitter};
    border-radius: 50%;
    position: absolute;
    right: 25px;
    top: 25px;
    background-image: url('https://turbologo.com/articles/wp-content/uploads/2019/07/twitter-bird-logo.png.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
`;

const StyledLinkButton = styled.a`
    display: block;
    width: 47px;
    height: 47px;
    border-radius: 50%;
    background: white url(${linkImg}) no-repeat;
    background-size: 60%;
    background-position: 50% 50%;
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
`;

const Card = ({ cardType, title, created, content, articleUrl }) => {
    return (
        <StyledWrapper>
            <InnerWrapper activeColor={cardType}>
                <StyledHeading>{title}</StyledHeading>
                <DateInfo>{created}</DateInfo>
                {cardType === 'twitter' && <StyledAvatar />}
                {cardType === 'article' && <StyledLinkButton href={articleUrl} />}
            </InnerWrapper>
            <InnerWrapper flex>
                <Paragraph>{content}</Paragraph>
                <Button secondary>REMOVE</Button>
            </InnerWrapper>
        </StyledWrapper>
    );
};

Card.propTypes = {
    cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
    title: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    articleUrl: PropTypes.string
};

Card.deafultProps = {
    cardType: 'note',
    articleUrl: null
};

export default Card;
