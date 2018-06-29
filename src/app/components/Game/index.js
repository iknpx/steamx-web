import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './style.styl';

export default class Game extends Component {
    static propTypes = {
        game: PropTypes.object.isRequired,
        rowview: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        rowview: false,
    };

    render() {
        const { game, rowview } = this.props;

        return (
            <div className={`${style.container} ${rowview ? style.rowview : ''}`}>
                <div className={style.image} style={{ backgroundImage: `url(${game.image})`}}></div>
                <div className={style.description}>
                    <span className={style.title}>{game.name}</span>
                    <span className={style.date}>{game.date}</span>
                    <p className={style.text}>{game.description}</p>
                </div>
            </div>
        );
    }
}
