export const DEBUG = process.env.NODE_ENV !== 'production';
export const WSHOST = DEBUG ? 'http://localhost:5000' : 'https://api.steamx.ml';

export const MESSAGES = {
    REQUEST: {
        GAMES: 'get::fetch::apps',
        PLAYERS: 'get::fetch::persons',
    },
    DELETE: {
        GAMES: 'get::clear::apps',
    },
    SUBSCRIBES: {
        EMPTYQUEUE: 'resolve done',
        GAMEDETAILS: 'resolve next',
        GAMES: 'post::fetch::apps',
        PLAYERS: 'post::fetch::persons',
    },
    SYSTEM: {
        CONNECT: 'connect',
        DISCONNECT: 'disconnect',
    },
};
