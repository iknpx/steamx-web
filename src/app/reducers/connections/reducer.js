import { createReducer } from 'redux-act';
import { socketsReady, socketsLost } from './actions';

export default createReducer({
    [socketsReady]: (store) => ({ ...store, sockets: true }),
    [socketsLost]: (store) => ({ ...store, sockets: false }),
}, {
    sockets: false,
});
