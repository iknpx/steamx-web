export const DEBUG = process.env.NODE_ENV !== 'production';
export const WSHOST = DEBUG ? 'http://localhost:5000' : 'https://api.steamx.ml';

export const MESSAGES = {
    REQUEST: {
        GAMES: 'get::fetch::apps',
        CLEARGAMES: 'get::clear::apps',
        PLAYERDETAILS: 'get::fetch::person',
        PLAYERS: 'get::fetch::persons',
    },
    DELETE: {
        GAMES: 'get::clear::apps',
    },
    SUBSCRIBES: {
        EMPTYQUEUE: 'post::fetch::queue::empty',
        GAMEDETAILS: 'post::fetch::app',
        GAMES: 'post::fetch::apps',
        PLAYERDETAILS: 'post::fetch::person',
        PLAYERS: 'post::fetch::persons',
    },
    SYSTEM: {
        CONNECT: 'connect',
        DISCONNECT: 'disconnect',
    },
};
