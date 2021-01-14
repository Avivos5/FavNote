import React from 'react';
import styled from 'styled-components';

import ButtonIcon from './ButtonIcon';
import bulbIcon from '../../../assets/icons/bulb.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import penIcon from '../../../assets/icons/pen.svg';
import plusIcon from '../../../assets/icons/plus.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';

const Background = styled.div`
    background-color: ${({ theme }) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
`;

export default {
    title: 'Components/ButtonIcon',
    component: ButtonIcon,
    decorators: [
        (Story) => (
            <Background>
                <Story />
            </Background>
        )
    ]
};

const Template = (args) => <ButtonIcon {...args} />;

export const Bulb = Template.bind({});
Bulb.args = {
    icon: bulbIcon,
    active: true
};
export const logout = Template.bind({});
logout.args = {
    icon: logoutIcon,
    active: true
};
export const pen = Template.bind({});
pen.args = {
    icon: penIcon,
    active: true
};
export const plus = Template.bind({});
plus.args = {
    icon: plusIcon,
    active: true
};
export const twitter = Template.bind({});
twitter.args = {
    icon: twitterIcon,
    active: true
};
