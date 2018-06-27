import io from 'socket.io-client';
import { MESSAGES, WSHOST } from './config';
import { socketsReady, socketsLost } from './reducers/connections/actions';

export const socket = io(WSHOST);

export const onConnect = dispatch => {
    socket.on(MESSAGES.SYSTEM.CONNECT, () => {
        dispatch(socketsReady());

        socket.on(MESSAGES.SYSTEM.DISCONNECT, () => onDisconnect(dispatch));
    });
};

function onDisconnect(dispatch) {
    dispatch(socketsLost());
}
