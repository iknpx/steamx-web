import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import style from './style.styl';

export default class Player extends Component {
    static propTypes = {
        onRemove: PropTypes.func.isRequired,
        player: PropTypes.object.isRequired,
    };

    handleDelete = () => {
        const { onRemove, player } = this.props;

        onRemove(player);
    }

    render() {
        const { player } = this.props;

        return (
            <div className={style.container}>
                <Icon className={style.remove} name="x" onClick={this.handleDelete} />
                <div className={style.icon} style={{ backgroundImage: `url(${player.icon})`}}></div>
                <span className={style.name}>{player.name}</span>
            </div>
        );
    }
}
