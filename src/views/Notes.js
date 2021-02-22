import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const Notes = ({ notes }) => {
    return (
        <GridTemplate>
            {notes.map((note) => (
                <Card
                    id={note.id}
                    title={note.title}
                    content={note.content}
                    created={note.created}
                    key={note.id}
                />
            ))}
        </GridTemplate>
    );
};

Notes.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            created: PropTypes.string.isRequired
        })
    )
};

Notes.defaultProps = {
    notes: []
};

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);
