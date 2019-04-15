import {connect} from 'react-redux';
import GenreShow from './genre_show';
import {fetchGenre} from '../../actions/genre_actions';
import { fetchProfile } from '../../actions/profile_actions';
import { createListItem, deleteListItem } from '../../actions/list_item_actions';
import { fetchList } from '../../actions/list_actions';




const msp = (state, ownProps) => {
    return{
        genre: state.entities.genres[ownProps.match.params.genreId] || {},
        profile: state.entities.profiles[ownProps.match.params.profileId] || {},
        list: state.entities.list
    };
};

const mdp = dispatch => {
    return{
        fetchGenre: (id) => dispatch(fetchGenre(id)),
        fetchProfile: (id) => dispatch(fetchProfile(id)),
        deleteListItem: (id) => dispatch(deleteListItem(id)),
        createListItem: (listItem) => dispatch(createListItem(listItem)),
        fetchList: (id) => dispatch(fetchList(id))
    }
}

export default connect(msp, mdp)(GenreShow);