import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import style from './style.styl';

export default class ButtonLink extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.string,
        ]).isRequired,
        className: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['default', 'blue']).isRequired,
    };

    static defaultProps = {
        className: '',
        type: 'default',
    };

    render() {
        const { children, className, to, type } = this.props;

        return (
            <Link to={to} className={`${style.container} ${style[type]} ${className}`}>
                {children}
            </Link>
        );
    }
}
