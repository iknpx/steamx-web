import { createReducer } from 'redux-act';
import {
    onGameDetilsAction,
    onGamesListAction,
    onGamesListClearAction,
    onGamesQueueEmptyAction,
    requestClearGamesAction,
    requestGamesListAction,
    removeGamesAction,
} from './actions';

export default createReducer({
    [onGameDetilsAction]: (store, payload) => {
        const { list } = store;
        const index = list.findIndex(game => game.appid === payload.appid && payload.multiplayer);

        return index !== -1
            ? { ...store, list: [{ ...list[index], ...payload }, ...list.slice(0, index), ...list.slice(index + 1)] }
            : { ...store };
    },
    [onGamesListAction]: (store, payload) => ({
        ...store,
        list: payload.filter(game => game.multiplayer || game.empty).sort((a, b) => a.score > b.score ? -1 : 1),
        isFetching: false,
        isVaitingDetails: payload.findIndex(game => game.empty) !== -1,
    }),
    [onGamesListClearAction]: store => ({ ...store, isClearing: false, list: [], isVaitingDetails: false }),
    [onGamesQueueEmptyAction]: store => ({ ...store, isVaitingDetails: false }),
    [requestClearGamesAction]: store => ({ ...store, isClearing: true }),
    [requestGamesListAction]: store => ({ ...store, isFetching: true }),
    [removeGamesAction]: (store, payload) => {
        const list = store.list.filter(game => {
            return payload.findIndex(appid => appid.toString() === game.appid.toString()) === -1;
        });

        return { ...store, list, isVaitingDetails: list.length };
    },
}, {
    isClearing: false,
    isFetching: false,
    isVaitingDetails: false,
    list: [],
});
