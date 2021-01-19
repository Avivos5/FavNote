import styled, { css } from 'styled-components';

import magnifierIcon from '../../../assets/icons/magnifier.svg';

const Input = styled.input`
    padding: 15px 30px;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.regular};
    background-color: ${({ theme }) => theme.grey100};
    border: none;
    border-radius: 50px;
    outline: none;

    ::placeholder {
        text-transform: uppercase;
        letter-spacing: 1px;
        color: ${({ theme }) => theme.grey300};
    }

    ${({ search }) =>
        search &&
        css`
            background-image: url(${magnifierIcon});
            background-position: 15px 50%;
            background-size: 15px;
            padding: 10px 20px 10px 40px;
            background-repeat: no-repeat;
        `}
`;

export default Input;
