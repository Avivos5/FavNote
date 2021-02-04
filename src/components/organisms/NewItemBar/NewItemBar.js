import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';

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

const NewItemBar = ({ pageContext, isVisible }) => {
    return (
        <StyledWrapper pageColor={pageContext} isVisible={isVisible}>
            <Heading big>Create new {pageContext}</Heading>
            <Input placeholder={pageContext === 'twitters' ? 'account name' : 'title'} />
            {pageContext === 'articles' && <StyledInput placeholder="Link" />}
            <StyledTextArea placeholder="Title" as="textarea" />
            <Button activeColor={pageContext}>ADD ITEM</Button>
        </StyledWrapper>
    );
};

NewItemBar.propTypes = {
    pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles'])
};

export default withContext(NewItemBar);
