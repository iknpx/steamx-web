import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './style.styl';

export default class Container extends Component {
    static propTypes = {
        children: PropTypes.any,
        className: PropTypes.string,
    };

    static defaultProps = {
        className: '',
    };

    render() {
        const { children, className, ...props } = this.props;

        return (
            <div className={`${style.container} ${className}`} {...props}>
                {children}
            </div>
        );
    }
}
