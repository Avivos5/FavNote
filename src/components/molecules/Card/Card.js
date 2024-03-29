import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import withContext from './../../../hoc/withContext';

import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import linkImg from '../../../assets/icons/link.svg';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from './../../../actions';

const StyledWrapper = styled.div`
    min-height: 380px;
    box-shadow: 0 10px 30px -10px ${({ theme }) => theme.shadow};
    border-radius: 10px;
    overflow: hidden;
    display: grid;
    grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
    padding: 17px 30px;
    background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
    position: relative;
    transition: background-color 0.5s;

    :first-of-type {
        z-index: 999;
    }

    ${({ flex }) =>
        flex &&
        css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-color: ${({ theme }) => theme.background2};
        `}
`;

const StyledHeading = styled(Heading)`
    margin: 5px 0 0;
`;

const StyledAvatar = styled.a`
    display: block;
    width: 85px;
    height: 85px;
    border: 6px solid ${({ theme }) => theme.twitters};
    border-radius: 50%;
    position: absolute;
    right: 25px;
    top: 25px;
    background-image: url('https://turbologo.com/articles/wp-content/uploads/2019/07/twitter-bird-logo.png.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    cursor: pointer;
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

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const StyledParagraph = styled(Paragraph)`
    margin-top: 20px;
`;

class Card extends React.Component {
    state = {
        redirect: false
    };

    openNote = () => {
        this.setState({ redirect: true });
    };

    render() {
        const { id, title, content, articleUrl, twitterName, removeItem, pageContext } = this.props;

        if (this.state.redirect) {
            return <Redirect to={`${pageContext}/${id}`} />;
        }
        return (
            <StyledWrapper>
                <InnerWrapper activeColor={pageContext}>
                    <StyledHeading>{title}</StyledHeading>
                    {pageContext === 'twitters' && (
                        <StyledAvatar href={`https://twitter.com/${twitterName}`} />
                    )}
                    {pageContext === 'articles' && <StyledLinkButton href={articleUrl} />}
                </InnerWrapper>
                <InnerWrapper flex>
                    <StyledParagraph>{content}</StyledParagraph>
                    <ButtonWrapper>
                        <Button onClick={() => removeItem(pageContext, id)} secondary>
                            REMOVE
                        </Button>
                        <Button onClick={() => this.openNote()} secondary>
                            Open
                        </Button>
                    </ButtonWrapper>
                </InnerWrapper>
            </StyledWrapper>
        );
    }
}

Card.propTypes = {
    pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    articleUrl: PropTypes.string,
    twitterName: PropTypes.string,
    id: PropTypes.string.isRequired,
    removeItem: PropTypes.func.isRequired
};

Card.deafultProps = {
    cardType: 'notes',
    articleUrl: null
};

const mapDispatchToProps = (dispatch) => ({
    removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id))
});

export default connect(null, mapDispatchToProps)(withContext(Card));
