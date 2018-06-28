import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
                            <NavLink to="/docs"
                                className={style.link}
                                activeClassName={style.active}>
                                DOCS
                            </NavLink>
                            <a href="https://github.com" className={style.link}>GITHUB</a>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}
