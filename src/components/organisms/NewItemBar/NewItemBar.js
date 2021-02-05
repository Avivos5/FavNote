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

const StyledWrapper = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 680px;
    background-color: white;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    padding: 100px 50px;
    border-left: 10px solid ${({ theme, pageColor }) => theme[pageColor]};
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
    transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
    transition: transform 0.2s ease-in-out;
`;

const StyledTextArea = styled(Input)`
    height: 30vh;
    margin: 30px 0 100px;
    border-radius: 20px;
`;

const StyledInput = styled(Input)`
    margin: 20px 0 0;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const NewItemBar = ({ pageContext, isVisible, addItem, closeNewItemBar }) => {
    return (
        <StyledWrapper pageColor={pageContext} isVisible={isVisible}>
            <Heading big>Create new {pageContext}</Heading>
            <Formik
                initialValues={{
                    title: '',
                    created: '',
                    content: '',
                    articleUrl: '',
                    twitterName: ''
                }}
                onSubmit={(values, { setSubmitting }) => {
                    addItem(pageContext, values);
                    setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                    closeNewItemBar();
                }}>
                {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                    <StyledForm onSubmit={handleSubmit}>
                        <Input
                            placeholder="title"
                            type="text"
                            name="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                        {pageContext === 'twitters' && (
                            <StyledInput
                                placeholder="account name"
                                type="text"
                                name="twitterName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.twitterName}
                            />
                        )}
                        {pageContext === 'articles' && (
                            <StyledInput
                                placeholder="Link"
                                type="text"
                                name="articleUrl"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.articleUrl}
                            />
                        )}
                        <StyledTextArea
                            as="textarea"
                            name="content"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.content}
                        />
                        <Button activeColor={pageContext} type="submit" disabled={isSubmitting}>
                            ADD ITEM
                        </Button>
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
