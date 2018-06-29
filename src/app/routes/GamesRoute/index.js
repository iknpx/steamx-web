import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, Container, Game, Loading, Player, Preloader } from '@/components';
import { requestClearGames, requestPlayersList, removePlayer } from '@/sockets';
import style from './style.styl';

@connect(({ games, players }) => ({ games, players }))
export default class GameRoute extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        games: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
        players: PropTypes.object.isRequired,
    };

    state = {
        rowview: false,
    };

    handlePlayerRemove = player => {
        const { players, dispatch } = this.props;

        const apps = players.list
            .filter(_player => _player.id !== player.id)
            .reduce((result, _player) => [...result, ..._player.apps], [])
            .reduce((result, appid) => ({ ...result, [appid]: appid}), {});

        dispatch(removePlayer(player, player.apps.filter(appid => {
            return Object.keys(apps).filter(_appid => _appid !== appid);
        })));
    }

    handleClearGames = () => {
        const { players, dispatch } = this.props;

        const apps = players.list
            .reduce((result, player) => [...result, ...player.apps], [])
            .reduce((result, appid) => ({ ...result, [appid]: appid}), {});

        dispatch(requestClearGames(
            Object.keys(apps)
        ));
    }

    componentDidMount() {
        const { players } = this.props.match.params;
        const { dispatch } = this.props;

        dispatch(
            requestPlayersList(players.split(','))
        );
    }

    render() {
        const { games, players } = this.props;
        const { rowview } = this.state;

        const resultGames = games.list.filter(game => !game.empty);
        const value = 100 / games.list.length * resultGames.length;

        const placeholder = players.isFetchingList || games.isFetching
            ? <Preloader />
            : !resultGames.length ? <span className={style.placeholder}>No multiplayer games found</span> : null;

        return (
            <div className={style.container}>
                <section className={style.top}>
                    <div className={style.overlay}>
                        <Container className={style.topGame}>
                            <span className={style.topGameTitle}>Popular game</span>
                            <span className={style.topGameName}>The Witcher 3: Wild Hunt</span>
                            <span className={style.topGameDescription}>The world is in chaos. The air is thick with tension and the smoke of burnt villages.</span>
                        </Container>
                        <Container className={style.topActions}>
                            <div className={style.players}>
                                {players.list.map(player => <Player key={player.id} player={player} onRemove={this.handlePlayerRemove} />)}
                            </div>
                            {resultGames.length ? <Button onClick={this.handleClearGames} type="button" color="blue">Clear</Button> : null}
                        </Container>
                    </div>
                </section>
                <Container className={style.actions}>
                    {games.isVaitingDetails ? <Loading value={value} /> : null }
                </Container>
                <Container className={style.games}>
                    {placeholder}
                    {resultGames.map(game => <Game key={game.appid} game={game} rowview={rowview} />)}
                </Container>
            </div>
        );
    }
}
