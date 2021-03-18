import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';

import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import PlusIcon from 'assets/icons/plus.svg';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';

const StyledWrapper = styled.div`
    padding: 25px 150px 25px 70px;
    position: relative;

    @media (max-width: 700px) {
        padding: 25px 30px 25px 30px;
    }

    @media (max-width: 350px) {
        padding: 25px 5px 25px 5px;
    }
`;

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 85px;
    margin-top: 50px;

    @media (max-width: 1500px) {
        grid-gap: 45px;
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
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

const StyledButtonIcon = styled(ButtonIcon)`
    border-radius: 50%;
    position: fixed;
    bottom: 40px;
    right: 40px;
    background-color: ${({ theme, activeColor }) => theme[activeColor]};
    transform: rotate(${({ isOpened }) => (isOpened ? '45deg' : '0')});
    transition: transform 0.2s ease-in-out;
    z-index: 100001;

    @media (max-width: 700px) {
        width: 45px;
        height: 45px;
        bottom: 20px;
        right: 20px;
    }
`;

class GridTemplate extends React.Component {
    state = { isItemBarVisible: false };

    handleNewItemBarToggle = () => {
        this.setState((prevState) => {
            return { isItemBarVisible: !prevState.isItemBarVisible };
        });
    };

    render() {
        const { children, pageContext, itemsCount } = this.props;
        const { isItemBarVisible } = this.state;

        return (
            <UserPageTemplate>
                <StyledWrapper>
                    <StyledPageHeader>
                        <Input search placeholder="search" />
                        <StyledHeading big as="h1">
                            {pageContext}
                        </StyledHeading>
                        <StyledParagraph>
                            {itemsCount} {pageContext}
                        </StyledParagraph>
                    </StyledPageHeader>
                    <StyledGrid>{children}</StyledGrid>
                    <StyledButtonIcon
                        icon={PlusIcon}
                        activeColor={pageContext}
                        isOpened={isItemBarVisible}
                        onClick={this.handleNewItemBarToggle}
                    />
                    <NewItemBar
                        isVisible={isItemBarVisible}
                        closeNewItemBar={this.handleNewItemBarToggle}
                    />
                </StyledWrapper>
            </UserPageTemplate>
        );
    }
}

GridTemplate.propTypes = {
    children: PropTypes.array.isRequired,
    pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
    itemsCount: PropTypes.number
};

GridTemplate.deafultProps = {
    pageContext: 'notes'
};

export default withContext(GridTemplate);
