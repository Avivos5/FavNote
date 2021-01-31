import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const Notes = ({ notes }) => {
    return (
        <GridTemplate pageType="notes">
            {notes.map((note) => (
                <Card
                    cardType="notes"
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

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);
