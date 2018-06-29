import { createReducer } from 'redux-act';
import {
    onPlayerDetailsAction,
    onPlayersListAction,
    requestPlayerDetailsAction,
    requestPlayersListAction,
    removePlayerAction,
} from './actions';

export default createReducer({
    [onPlayerDetailsAction]: (store, payload) => ({ ...store, isFetchingDetails: false, list: [...store.list, payload] }),
    [onPlayersListAction]: (store, payload) => ({ ...store, isFetchingList: false, list: payload }),
    [requestPlayerDetailsAction]: (store) => ({ ...store, isFetchingDetails: true }),
    [requestPlayersListAction]: (store) => ({ ...store, isFetchingList: true }),
    [removePlayerAction]: (store, payload) => ({ ...store, list: store.list.filter(player => player.id !== payload.id)}),
}, {
    isFetchingList: false,
    isFetchingDetails: false,
    list: [],
});
