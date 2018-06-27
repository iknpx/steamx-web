import React, { Component } from 'react';

import style from './style.styl';
import maxresdefault from '@assets/images/maxresdefault.jpg';

export default class StartPage extends Component {
    render() {
        return (
            <div className={style.container}>
                <img src={maxresdefault} alt="maxresdefault" />
            </div>
        );
    }
}
