import React, { Component } from 'react';

import Button from '../Button';
import Container from '../Container';
import style from './style.styl';

export default class WelcomeForm extends Component {
    render() {
        return (
            <Container className={style.container}>
                <span className={style.title}>SteamX</span>
                <span className={style.text}>find your Steam teammates games</span>
                <Button to="/start" color="blue" className={style.button}>
                    start
                </Button>
            </Container>
        );
    }
}
