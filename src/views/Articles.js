import React from 'react';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const Articles = ({ articles }) => {
    return (
        <GridTemplate pageType="articles">
            {articles.map((article) => (
                <Card
                    cardType="articles"
                    id={article.id}
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

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
