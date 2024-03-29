import React from 'react';

import Card from './Card';

export default {
    title: 'Molecules/Card',
    component: Card
};

const Template = (args) => <Card {...args} />;

export const Note = Template.bind({});
Note.args = {
    cardType: 'notes',
    title: 'Hello World',
    created: '5 days',
    content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi'
};
export const Twitter = Template.bind({});
Twitter.args = {
    cardType: 'twitters',
    title: 'Hello World',
    created: '5 days',
    content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi'
};
export const Article = Template.bind({});
Article.args = {
    cardType: 'articles',
    title: 'Hello World',
    created: '5 days',
    content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi'
};
