import React from 'react';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const articles = [
    {
        id: 1,
        title: 'React on my mind',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://youtube.com/helloroman',
        created: '1 day'
    },
    {
        id: 2,
        title: 'Wish you React',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://youtube.com/helloroman',
        created: '1 day'
    },
    {
        id: 3,
        title: 'You gave React a bad name',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://youtube.com/helloroman',
        created: '5 days'
    },
    {
        id: 4,
        title: 'Is it React you looking for?',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://youtube.com/helloroman',
        created: '10 days'
    }
];

const Articles = () => {
    return (
        <GridTemplate pageType="article">
            {articles.map((article) => (
                <Card
                    cardType="article"
                    title={article.title}
                    content={article.content}
                    created={article.created}
                    articleUrl={article.articleUrl}
                    key={article.id}
                />
            ))}
        </GridTemplate>
    );
};

export default Articles;
