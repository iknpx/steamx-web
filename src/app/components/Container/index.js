import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './style.styl';

export default class Content extends Component {
    static propTypes = {
        children: PropTypes.any.isRequired,
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
