import { createAction } from 'redux-act';

export const socketsReady = createAction('socket connection ready');
export const socketsLost = createAction('socket connection lost');
