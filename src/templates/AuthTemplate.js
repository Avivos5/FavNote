import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import logo from 'assets/icons/logo.svg';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import { Link } from 'react-router-dom';
import { routes } from 'routes/index';
import { connect } from 'react-redux';
import { authenticate as authenticateAction } from 'actions';
import { Redirect } from 'react-router-dom';

import { Form, Formik } from 'formik';

const StyledWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.notes};

    & > * {
        margin-bottom: 15px;
    }
`;

const StyledLogo = styled.img`
    width: 200px;
    height: auto;
`;

const AuthCard = styled.div`
    width: 400px;
    height: 400px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledInput = styled(Input)`
    margin: 0 0 30px 0;
    height: 40px;
    width: 300px;
`;

const StyledHeading = styled(Heading)`
    margin-bottom: 25px;
`;

const StyledLink = styled(Link)`
    display: block;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.bold};
    color: black;
    text-transform: uppercase;
    margin: 20px 0 50px;
`;

const AuthTemplate = ({ authType, authenticateLogin, userID }) => {
    return (
        <StyledWrapper>
            <StyledLogo src={logo} alt="FavNote logo" />
            <Heading>Your new favorite online notes experience</Heading>
            <AuthCard>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    onSubmit={({ username, password }) => {
                        console.log(username, password);
                        switch (authType) {
                            case 'login':
                                authenticateLogin(username, password);
                                break;

                            default:
                                break;
                        }
                    }}>
                    {({ handleChange, handleBlur, values }) => {
                        if (userID) {
                            return <Redirect to={routes.home} />; //żeby nie było teogo błędu podczas logowania z niezaładowanym pageContext, tutaj musi być routes.notes. Narazie zosawiam tak, ale warto to sprawdzić
                        }
                        return (
                            <>
                                <StyledHeading>
                                    {authType === 'login' ? 'Sign in' : 'Registeration'}
                                </StyledHeading>
                                <StyledForm>
                                    <StyledInput
                                        placeholder="login"
                                        type="text"
                                        name="username"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}
                                    />
                                    <StyledInput
                                        placeholder="password"
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    <Button activeColor="notes" type="submit">
                                        {authType === 'login' ? 'Sign in' : 'Register'}
                                    </Button>
                                </StyledForm>
                                <StyledLink
                                    to={routes[authType === 'login' ? 'register' : 'login']}>
                                    I want to {authType === 'login' ? 'Register' : 'Login in'}
                                </StyledLink>
                            </>
                        );
                    }}
                </Formik>
            </AuthCard>
        </StyledWrapper>
    );
};

const mapStateToProps = ({ userID = null }) => ({
    userID
});

const mapDispatchToProps = (dispatch) => ({
    authenticateLogin: (username, password) => dispatch(authenticateAction(username, password))
});

AuthTemplate.propTypes = {
    authType: PropTypes.oneOf(['login', 'register']),
    authenticateLogin: PropTypes.func,
    userID: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthTemplate);
