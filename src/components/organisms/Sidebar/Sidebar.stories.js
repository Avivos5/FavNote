import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Sidebar from './Sidebar';

export default {
    title: 'Organisms/Sidebar',
    component: Sidebar,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        )
    ]
};

const Template = (args) => <Sidebar {...args} />;

export const Note = Template.bind({});
Note.args = {
    pageType: 'note'
};
export const Twitter = Template.bind({});
Twitter.args = {
    pageType: 'twitter'
};
export const Article = Template.bind({});
Article.args = {
    pageType: 'article'
};
