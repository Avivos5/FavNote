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
            <GridTemplate itemsCount={twitters.length}>
                {twitters.map(({ title, content, twitterName, _id: id }) => (
                    <Card
                        id={id}
                        title={title}
                        content={content}
                        twitterName={twitterName}
                        key={id}
                    />
                ))}
            </GridTemplate>
        );
    }
}

Twitters.propTypes = {
    twitters: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        })
    ),
    fetchTwitters: PropTypes.func
};

Twitters.defaultProps = {
    twitters: []
};

const mapStateToProps = ({ twitters }) => ({ twitters });

const mapDispatchToProps = (dispatch) => ({
    fetchTwitters: () => dispatch(fetchItems('twitters'))
});

export default connect(mapStateToProps, mapDispatchToProps)(Twitters);
