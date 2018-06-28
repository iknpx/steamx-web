import { createAction } from 'redux-act';

export const socketsReadyAction = createAction('socket connection ready');
export const socketsLostAction = createAction('socket connection lost');
