import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const Twitters = ({ twitters }) => {
    return (
        <GridTemplate>
            {twitters.map((twitter) => (
                <Card
                    id={twitter.id}
                    title={twitter.title}
                    content={twitter.content}
                    created={twitter.created}
                    key={twitter.id}
                />
            ))}
        </GridTemplate>
    );
};

Twitters.propTypes = {
    twitters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            created: PropTypes.string.isRequired
        })
    )
};

const mapStateToProps = ({ twitters }) => ({ twitters });

export default connect(mapStateToProps)(Twitters);
