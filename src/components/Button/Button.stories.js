import React from 'react';

import Button from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        color: {
            control: {
                type: 'select',
                options: {
                    Primary: 'hsl(49, 100%, 58%)',
                    Secondary: 'hsl(196, 83%, 75%)',
                    Tertiary: 'hsl(106, 47%, 64%)'
                }
            }
        }
    }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    secondary: false,
    children: 'Close / Save'
};

export const Secondary = Template.bind({});
Secondary.args = {
    secondary: true,
    children: 'Remove'
};
