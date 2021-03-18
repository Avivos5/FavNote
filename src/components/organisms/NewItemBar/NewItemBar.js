import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import { Formik } from 'formik';
import * as Yup from 'yup';

const StyledWrapper = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 680px;
    background-color: ${({ theme }) => theme.background2};
    z-index: 100000;
    display: flex;
    flex-direction: column;
    padding: 100px 50px;
    border-left: 10px solid ${({ theme, pageColor }) => theme[pageColor]};
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
    transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
    transition: transform 0.2s ease-in-out, background-color 0.5s;
    overflow: scroll;

    @media (max-width: 680px) {
        width: 100vw;
    }

    @media (max-width: 475px) {
        padding: 50px 10px;
    }

    @media (max-width: 360px) {
        align-items: center;
    }
`;

const StyledTextArea = styled(Input)`
    height: 30vh;
    margin: 30px 0 0;
    border-radius: 20px;
    width: 100%;
`;

const StyledInput = styled(Input)`
    margin: 20px 0 0;

    :first-of-type {
        margin: 0;
    }

    @media (max-width: 360px) {
        width: 100%;
        height: 35px;
        font-size: ${({ theme }) => theme.fontSize.xs};
    }
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;

    @media (max-width: 360px) {
        width: 85%;
    }
`;

const ErrorMessage = styled.p`
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 5px 0 0 20px;
    color: red;

    @media (max-width: 360px) {
        font-size: ${({ theme }) => theme.fontSize.xs};
        margin: 2px 0 0 10px;
    }
`;

const StyledButton = styled(Button)`
    margin-top: 100px;

    @media (max-height: 650px) {
        margin: 30px auto 0;
        width: 80%;
        font-size: ${({ theme }) => theme.fontSize.xs};
    }
`;

const StyledHeading = styled(Heading)`
    margin-bottom: 15px;

    @media (max-width: 515px) {
        text-align: center;
        margin-bottom: 7px;
    }
`;

const NewItemBar = ({ pageContext, isVisible, addItem, closeNewItemBar }) => {
    const URLRegEx = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

    let validationShape = {
        title: Yup.string().required('Title is required'),
        content: Yup.string().required('Content is required')
    };

    if (pageContext === 'twitters') {
        validationShape.twitterName = Yup.string().required('Please, add twitter name');
    } else if (pageContext === 'articles') {
        validationShape.articleUrl = Yup.string()
            .matches(URLRegEx, 'Enter a valid URL')
            .required('Article URL is required');
    }

    return (
        <StyledWrapper pageColor={pageContext} isVisible={isVisible}>
            <StyledHeading big>Create new {pageContext}</StyledHeading>
            <Formik
                initialValues={{
                    title: '',
                    content: '',
                    created: '',
                    twitterName: '',
                    articleUrl: ''
                }}
                onSubmit={(values, { resetForm }) => {
                    addItem(pageContext, values);
                    closeNewItemBar();
                    resetForm();
                }}
                validationSchema={Yup.object().shape(validationShape)}>
                {({ values, touched, errors, handleChange, handleBlur, handleSubmit }) => (
                    <StyledForm onSubmit={handleSubmit}>
                        <StyledInput
                            placeholder="title"
                            type="text"
                            name="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                        {errors.title && touched.title && (
                            <ErrorMessage>{errors.title}</ErrorMessage>
                        )}
                        {pageContext === 'twitters' && (
                            <>
                                <StyledInput
                                    placeholder="account name"
                                    type="text"
                                    name="twitterName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.twitterName}
                                />
                                {errors.twitterName && touched.twitterName && (
                                    <ErrorMessage>{errors.twitterName}</ErrorMessage>
                                )}
                            </>
                        )}
                        {pageContext === 'articles' && (
                            <>
                                <StyledInput
                                    placeholder="Link"
                                    type="text"
                                    name="articleUrl"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.articleUrl}
                                />
                                {errors.articleUrl && touched.articleUrl && (
                                    <ErrorMessage>{errors.articleUrl}</ErrorMessage>
                                )}
                            </>
                        )}
                        <StyledTextArea
                            as="textarea"
                            name="content"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.content}
                        />
                        {errors.content && touched.content && (
                            <ErrorMessage>{errors.content}</ErrorMessage>
                        )}
                        <StyledButton activeColor={pageContext} type="submit">
                            ADD ITEM
                        </StyledButton>
                    </StyledForm>
                )}
            </Formik>
        </StyledWrapper>
    );
};

NewItemBar.propTypes = {
    pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
    isVisible: PropTypes.bool,
    addItem: PropTypes.func,
    closeNewItemBar: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
    addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent))
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
