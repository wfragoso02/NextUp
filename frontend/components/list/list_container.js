import {connect} from 'react-redux';
import List from './list';
import { fetchProfile } from '../../actions/profile_actions';
import { createListItem, deleteListItem } from '../../actions/list_item_actions';
import { fetchList } from '../../actions/list_actions';




const msp = (state, ownProps) => {
    return{
        profile: state.entities.profiles[ownProps.match.params.profileId] || {},
        list: state.entities.list
    };
};

const mdp = dispatch => {
    return{
        fetchProfile: (id) => dispatch(fetchProfile(id)),
        deleteListItem: (id) => dispatch(deleteListItem(id)),
        createListItem: (listItem) => dispatch(createListItem(listItem)),
        fetchList: (id) => dispatch(fetchList(id))
    }
}

export default connect(msp, mdp)(List);