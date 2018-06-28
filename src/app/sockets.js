import io from 'socket.io-client';
import { MESSAGES, WSHOST } from './config';

import {
    socketsReadyAction,
    socketsLostAction,
} from './reducers/connections/actions';

import {
    onGameDetilsAction,
    onGamesListAction,
    onGamesListClearAction,
    onGamesQueueEmptyAction,
    requestClearGamesAction,
    requestGamesListAction,
} from './reducers/games/actions';

import {
    onPlayerDetailsAction,
    onPlayersListAction,
    requestPlayerDetailsAction,
    requestPlayersListAction,
} from './reducers/players/actions';

export const socket = io(WSHOST);

export const onConnect = dispatch => {
    socket.on(MESSAGES.SYSTEM.CONNECT, () => {
        dispatch(socketsReadyAction());

        socket.on(MESSAGES.SYSTEM.DISCONNECT, () => onDisconnect(dispatch));
        socket.on(MESSAGES.SUBSCRIBES.EMPTYQUEUE, () => onGamesQueueEmpty(dispatch));
        socket.on(MESSAGES.SUBSCRIBES.GAMEDETAILS, payload => onGameDetails(dispatch, payload));
        socket.on(MESSAGES.SUBSCRIBES.GAMES, payload => onGamesList(dispatch, payload));
        socket.on(MESSAGES.SUBSCRIBES.PLAYERDETAILS, payload => onPlayerDetails(dispatch, payload));
        socket.on(MESSAGES.SUBSCRIBES.PLAYERS, payload => onPlayersList(dispatch, payload));
        socket.on(MESSAGES.DELETE.GAMES, payload => onGamesListClear(dispatch, payload));
    });
};

export const requestGames = payload => dispatch => {
    dispatch(requestGamesListAction());
    socket.emit(MESSAGES.REQUEST.GAMES, payload);
};

export const requestClearGames = payload => dispatch => {
    dispatch(requestClearGamesAction());
    socket.emit(MESSAGES.REQUEST.CLEARGAMES, payload);
};

export const requestPlayerDetails = payload => dispatch => {
    dispatch(requestPlayerDetailsAction());
    socket.emit(MESSAGES.REQUEST.PLAYERDETAILS, payload);
};

export const requestPlayersList = payload => dispatch => {
    dispatch(requestPlayersListAction());
    socket.emit(MESSAGES.REQUEST.PLAYERS, payload);
};

function onDisconnect(dispatch) {
    dispatch(socketsLostAction());
}

function onGameDetails(dispatch, payload) {
    dispatch(onGameDetilsAction(payload));
}

function onGamesList(dispatch, payload) {
    dispatch(onGamesListAction(payload));
}

function onGamesListClear(dispatch) {
    dispatch(onGamesListClearAction());
}

function onGamesQueueEmpty(dispatch) {
    dispatch(onGamesQueueEmptyAction());
}

function onPlayerDetails(dispatch, payload) {
    dispatch(onPlayerDetailsAction(payload));
}

function onPlayersList(dispatch, payload) {
    dispatch(onPlayersListAction(payload));
}
