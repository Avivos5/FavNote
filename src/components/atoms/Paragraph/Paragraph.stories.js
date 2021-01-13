import React from 'react';

import Paragraph from './Paragraph';

export default {
    title: 'Components/Paragraph',
    component: Paragraph
};

const Template = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Hello World'
};
