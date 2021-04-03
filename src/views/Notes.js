import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';
import { fetchItems } from 'actions';
import { Redirect } from 'react-router-dom';
import { routes } from 'routes/index';

class Notes extends Component {
    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {
        const { notes, userID } = this.props;
        if (!userID) {
            return <Redirect to={routes.login} />;
        }
        return (
            <GridTemplate itemsCount={notes.length}>
                {notes.map(({ _id: id, title, content }) => (
                    <Card id={id} title={title} content={content} key={id} />
                ))}
            </GridTemplate>
        );
    }
}

Notes.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        })
    ),
    fetchNotes: PropTypes.func,
    userID: PropTypes.string
};

Notes.defaultProps = {
    notes: []
};

const mapStateToProps = ({ notes, userID = null }) => ({ notes, userID });

const mapDispatchToProps = (dispatch) => ({
    fetchNotes: () => dispatch(fetchItems('notes'))
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
