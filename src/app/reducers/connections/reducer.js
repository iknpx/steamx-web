import { createReducer } from 'redux-act';
import { socketsReadyAction, socketsLostAction } from './actions';

export default createReducer({
    [socketsReadyAction]: (store) => ({ ...store, sockets: true }),
    [socketsLostAction]: (store) => ({ ...store, sockets: false }),
}, {
    sockets: false,
});
