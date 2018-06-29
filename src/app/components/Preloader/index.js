import React, { Component } from 'react';

import oval from '@assets/oval.svg';
import style from './style.styl';

export default class Preloader extends Component {
    render() {
        return (
            <div className={style.container}>
                <img src={oval} alt="Loading..." className={style.oval} />
                <span className={style.title}>Fetching games list</span>
            </div>
        );
    }
}
