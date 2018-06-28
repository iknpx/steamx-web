import { createAction } from 'redux-act';

export const onPlayerDetailsAction = createAction('player details :: delivered');
export const onPlayersListAction = createAction('players list :: delivered');
export const requestPlayerDetailsAction = createAction('player details :: requested');
export const requestPlayersListAction = createAction('players list :: requested');
