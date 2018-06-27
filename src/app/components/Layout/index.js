import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './style.styl';

export default class Layout extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.arrayOf(PropTypes.element),
        ]).isRequired,
    };

    render() {
        return (
            <div className={style.container}>
                {this.props.children}
            </div>
        );
    }
}
