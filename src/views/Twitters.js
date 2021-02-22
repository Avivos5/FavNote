import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';
import { fetchItems } from 'actions';

class Twitters extends Component {
    componentDidMount() {
        this.props.fetchTwitters();
    }

    render() {
        const { twitters } = this.props;
        return (
            <GridTemplate>
                {twitters.map((twitter) => (
                    <Card
                        id={twitter.id}
                        title={twitter.title}
                        content={twitter.content}
                        twitterName={twitter.twitterName}
                        created={twitter.created}
                        key={twitter.id}
                    />
                ))}
            </GridTemplate>
        );
    }
}

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

Twitters.defaultProps = {
    twitters: []
};

const mapStateToProps = ({ twitters }) => ({ twitters });

const mapDispatchToProps = (dispatch) => ({
    fetchTwitters: () => dispatch(fetchItems('twitters'))
});

export default connect(mapStateToProps, mapDispatchToProps)(Twitters);
