import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import { withRouter } from 'react-router';

import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import bulbIcon from '../../../assets/icons/bulb.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import penIcon from '../../../assets/icons/pen.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';
import logoIcon from '../../../assets/icons/logo.svg';
import { connect } from 'react-redux';
import { logout as logoutAction } from 'actions';

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
`;

const Sidebar = ({ pageContext, logout, history }) => {
    return (
        <StyledWrapper activeColor={pageContext}>
            <StyledLogo as={Link} to="/" icon={logoIcon}></StyledLogo>
            <StyledLinksWrap>
                <li>
                    <ButtonIcon as={NavLink} to="/notes" icon={penIcon} activeclass="active" />
                </li>
                <li>
                    <ButtonIcon
                        as={NavLink}
                        to="/twitters"
                        icon={twitterIcon}
                        activeclass="active"
                    />
                </li>
                <li>
                    <ButtonIcon
                        as={NavLink}
                        to="/articles"
                        icon={bulbIcon}
                        activeClassName="active"
                    />
                </li>
            </StyledLinksWrap>
            <ButtonIcon
                onClick={() => {
                    logout(history);
                }}
                icon={logoutIcon}></ButtonIcon>
        </StyledWrapper>
    );
};

Sidebar.propTypes = {
    pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
    logout: PropTypes.func,
    history: PropTypes.object
};

Sidebar.deafultProps = {
    pageContext: 'notes'
};

const mapDispatchToProps = (dispatch) => ({
    logout: (history) => dispatch(logoutAction(history))
});

export default connect(null, mapDispatchToProps)(withContext(withRouter(Sidebar)));
