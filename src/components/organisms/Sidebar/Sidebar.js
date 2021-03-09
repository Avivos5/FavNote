import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import withContext from './../../../hoc/withContext';
import { withRouter } from 'react-router';

import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import bulbIcon from '../../../assets/icons/bulb.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import penIcon from '../../../assets/icons/pen.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';
import logoIcon from '../../../assets/icons/logo.svg';
import { connect } from 'react-redux';
import { logout as logoutAction } from './../../../actions';
import DarkModeToggle from 'react-dark-mode-toggle';
import { ColorThemeContext } from 'theme/ColorTheme';
import HamburgerMenu from 'react-hamburger-menu';

const StyledWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 150px;
    background-color: ${({ theme, activeColor }) =>
        activeColor ? theme[activeColor] : theme.notes};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transition: background-color 0.5s;
    z-index: 100000;

    @media (max-width: 700px) {
        transform: translateX(${({ isOpened }) => (isOpened ? 0 : '-150px')});
        transition: transform 0.5s;
    }
`;

const StyledLinksWrap = styled.ul`
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
    flex-grow: 1;

    & li {
        margin-bottom: 15px;
    }
`;

const StyledLogo = styled(ButtonIcon)`
    width: 120px;
    height: 120px;
    margin-bottom: 10vh;

    @media (max-height: 600px) {
        height: 90px;
        width: 90px;
        margin-bottom: 2vh;
    }
`;

const LogoutButtonIcon = styled(ButtonIcon)`
    margin-bottom: 20px;

    @media (max-height: 600px) {
        height: 50px;
        width: 50px;
        margin-bottom: 1px;
    }
`;

const StyledButtonIcon = styled(ButtonIcon)`
    @media (max-height: 600px) {
        height: 50px;
        width: 50px;
    }
`;

const StyledToggle = styled(DarkModeToggle)`
    outline: none;
    margin-bottom: 20px;
    @media (max-height: 600px) {
        height: 50px;
        width: 50px;
    }
`;

const StyledHamburgerMenu = styled.div`
    position: absolute;
    top: 15px;
    right: -50px;
`;

class Sidebar extends Component {
    state = {
        menuOpened: true
    };

    componentDidMount() {
        this.setState({ menuOpened: false });
    }

    toggleMenu() {
        this.setState((prevState) => {
            return { menuOpened: !prevState.menuOpened };
        });
    }

    render() {
        const { pageContext, logout, history, isMobile, isMobileHeight } = this.props;
        const { menuOpened } = this.state;

        return (
            <ColorThemeContext.Consumer>
                {({ theme, themeToggler, mountedComponent }) => {
                    if (!mountedComponent) return <div />;
                    return (
                        <StyledWrapper activeColor={pageContext} isOpened={menuOpened}>
                            <StyledLogo as={Link} to="/" icon={logoIcon}></StyledLogo>
                            <StyledLinksWrap>
                                <li>
                                    <StyledButtonIcon
                                        as={NavLink}
                                        to="/notes"
                                        icon={penIcon}
                                        activeclass="active"
                                    />
                                </li>
                                <li>
                                    <StyledButtonIcon
                                        as={NavLink}
                                        to="/twitters"
                                        icon={twitterIcon}
                                        activeclass="active"
                                    />
                                </li>
                                <li>
                                    <StyledButtonIcon
                                        as={NavLink}
                                        to="/articles"
                                        icon={bulbIcon}
                                        activeClassName="active"
                                    />
                                </li>
                            </StyledLinksWrap>
                            <StyledToggle
                                onChange={() => themeToggler()}
                                checked={theme === 'light' ? false : true}
                                speed={5}
                                size={isMobileHeight ? 60 : 80}
                            />
                            <LogoutButtonIcon
                                onClick={() => {
                                    logout(history);
                                    theme === 'dark' &&
                                        window.localStorage.setItem('theme', 'dark');
                                    theme === 'dark' && themeToggler();
                                }}
                                icon={logoutIcon}
                            />
                            {isMobile && (
                                <StyledHamburgerMenu>
                                    <HamburgerMenu
                                        isOpen={this.state.menuOpened}
                                        menuClicked={this.toggleMenu.bind(this)}
                                        width={36}
                                        height={30}
                                        strokeWidth={4}
                                        rotate={0}
                                        color={theme === 'light' ? 'black' : 'white'}
                                        borderRadius={2}
                                        animationDuration={0.5}
                                    />
                                </StyledHamburgerMenu>
                            )}
                        </StyledWrapper>
                    );
                }}
            </ColorThemeContext.Consumer>
        );
    }
}

Sidebar.propTypes = {
    pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
    logout: PropTypes.func,
    history: PropTypes.object,
    themeToggler: PropTypes.func,
    isDarkTheme: PropTypes.bool
};

Sidebar.deafultProps = {
    pageContext: 'notes'
};

const mapDispatchToProps = (dispatch) => ({
    logout: (history) => dispatch(logoutAction(history))
});

export default connect(null, mapDispatchToProps)(withContext(withRouter(Sidebar)));
