import React, { Component } from 'react';

import Container from '../Container';
import style from './style.styl';

export default class Header extends Component {
    render() {
        return (
            <div className={style.container}>
                <Container>
                    <div className={style.row}>
                        <span className={style.name}>SteamX</span>
                        <div className={style.navigation}>
                            <a href="https://github.com/iknpx/steamx-web" target="_blank" rel="noopener noreferrer" className={style.link}>GITHUB</a>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}
