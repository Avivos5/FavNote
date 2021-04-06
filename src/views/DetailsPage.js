import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
class DetailsPage extends Component {
    state = {
        activeItem: {
            title: '',
            content: '',
            articleUrl: '',
            twitterName: ''
        }
    };

    componentDidMount() {
        if (this.props.activeItem) {
            const [activeItem] = this.props.activeItem;
            this.setState({ activeItem });
        } else {
            const { id } = this.props.match.params;

            axios
                .get(`https://polar-tundra-85645.herokuapp.com/api/note/${id}`)
                .then(({ data }) => {
                    this.setState({ activeItem: data });
                })
                .catch((err) => console.log(err));
        }
    }

    render() {
        const { activeItem } = this.state;
        return (
            <>
                <DetailsTemplate
                    title={activeItem.title}
                    // created={activeItem.created}
                    content={activeItem.content}
                    articleUrl={activeItem.articleUrl}
                    twitterName={activeItem.twitterName}
                />
            </>
        );
    }
}

DetailsPage.propTypes = {
    activeItem: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            articleUrl: PropTypes.string.isRequired,
            twitterName: PropTypes.string.isRequired
        })
    ),
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    })
};

const mapStateToProps = (state, ownProps) => {
    if (state[ownProps.pageContext]) {
        return {
            activeItem: state[ownProps.pageContext].filter(
                (item) => item._id === ownProps.match.params.id
            )
        };
    }
    return {};
};

export default withContext(connect(mapStateToProps)(DetailsPage));
