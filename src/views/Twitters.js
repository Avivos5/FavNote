import React from 'react';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const Twitters = ({ twitters }) => {
    return (
        <GridTemplate pageType="twitters">
            {twitters.map((twitter) => (
                <Card
                    cardType="twitters"
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

const mapStateToProps = ({ twitters }) => ({ twitters });

export default connect(mapStateToProps)(Twitters);
