import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const Articles = ({ articles }) => {
    return (
        <GridTemplate>
            {articles.map((article) => (
                <Card
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

Articles.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            created: PropTypes.string.isRequired,
            articleUrl: PropTypes.string.isRequired
        })
    )
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
