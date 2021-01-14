import React from 'react';
import styled, { css } from 'styled-components';

import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';

const StyledWrapper = styled.div`
    min-height: 380px;
    /* width: 500px; // do usunięcia */
    box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
    border-radius: 10px;
    background-color: pink;
    overflow: hidden;
    display: grid;
    grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
    padding: 17px 30px;
    background-color: ${({ yellow, theme }) => (yellow ? theme.primary : 'white')};

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

const Card = () => {
    return (
        <StyledWrapper>
            <InnerWrapper yellow>
                <StyledHeading>Hello world</StyledHeading>
                <DateInfo>5 days</DateInfo>
            </InnerWrapper>
            <InnerWrapper flex>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ex ullam unde
                    labore quam impedit eos. Voluptatum ullam repudiandae blanditiis quasi, sint
                    eligendi quod accusantium itaque beatae natus non aspernatur.
                </Paragraph>
                <Button secondary>REMOVE</Button>
            </InnerWrapper>
        </StyledWrapper>
    );
};

export default Card;
