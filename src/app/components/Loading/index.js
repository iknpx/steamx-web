import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './style.styl';

export default class Loading extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
    };

    render() {
        const { value } = this.props;

        return (
            <div className={style.container}>
                <div className={style.labels}>
                    <span className={style.title}>Loading games details</span>
                    <span className={style.value}>{value.toFixed(1)}%</span>
                </div>
                <div className={style.row}>
                    <div className={style.bar} style={{ width: `${value}%` }}></div>
                </div>
            </div>
        );
    }
}
