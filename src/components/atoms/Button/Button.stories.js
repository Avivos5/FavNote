import React from 'react';

import Button from './Button';
import { theme } from '../../../theme/mainTheme';

export default {
    title: 'Atoms/Button',
    component: Button,
    argTypes: {
        color: {
            control: {
                type: 'select',
                options: {
                    Primary: theme.primary,
                    Secondary: theme.secondary,
                    Tertiary: theme.tertiary
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
