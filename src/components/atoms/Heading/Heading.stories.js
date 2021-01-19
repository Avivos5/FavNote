import React from 'react';

import Heading from './Heading';

export default {
    title: 'Atoms/Heading',
    component: Heading
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Heading'
};
