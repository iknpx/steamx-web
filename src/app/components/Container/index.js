import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './style.styl';

export default class Content extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
    };

    render() {
        return (
            <div className={style.container}>
                {this.props.children}
            </div>
        );
    }
}
