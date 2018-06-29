import { createAction } from 'redux-act';

export const onGameDetilsAction = createAction('new game details :: delivered');
export const onGamesListAction = createAction('games list :: delivered');
export const onGamesListClearAction = createAction('clear games list :: success');
export const onGamesQueueEmptyAction = createAction('games list queue :: empty');
export const requestClearGamesAction = createAction('clear games list :: requested');
export const requestGamesListAction = createAction('games list :: requested');
export const removeGamesAction = createAction('remove games from local state');
