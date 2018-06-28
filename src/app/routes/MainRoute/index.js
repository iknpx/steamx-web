import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { PlayerForm, WelcomeForm } from '@/components';
import style from './style.styl';

export default class MainRoute extends Component {
    render() {
        return (
            <div className={style.container}>
                <div className={style.overlay}>
                    <Route exact path="/" component={WelcomeForm} />
                    <Route path="/start" component={PlayerForm} />
                    <div className={style.metadata}>
                        <span className={style.metadataTitle}>For Honor: The Berserker</span>
                        <span className={style.metadataText}>Enter the chaos of a raging war as a bold knight, brutal viking, or mysterious samurai.</span>
                    </div>
                </div>
            </div>
        );
    }
}
