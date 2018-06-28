import { createReducer } from 'redux-act';
import {
    onGameDetilsAction,
    onGamesListAction,
    onGamesListClearAction,
    onGamesQueueEmptyAction,
    requestClearGamesAction,
    requestGamesListAction,
} from './actions';

export default createReducer({
    [onGameDetilsAction]: (store, payload) => {
        const { list } = store;
        const index = list.findIndex(game => game.appid === payload.appid);

        return index !== -1
            ? { ...store, list: [...list.slice(0, index), { ...list[index], ...payload }, ...list.slice(index + 1)] }
            : { ...store };
    },
    [onGamesListAction]: (store, payload) => ({
        ...store,
        list: payload,
        isFetching: false,
        isVaitingDetails: payload.findIndex(game => game.empty) !== -1,
    }),
    [onGamesListClearAction]: store => ({ ...store, isClearing: false, list: [] }),
    [onGamesQueueEmptyAction]: store => ({ ...store, isVaitingDetails: false }),
    [requestClearGamesAction]: store => ({ ...store, isClearing: true }),
    [requestGamesListAction]: store => ({ ...store, isFetching: true }),
}, {
    isClearing: false,
    isFetching: false,
    isVaitingDetails: false,
    list: [],
});
