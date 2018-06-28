import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Icon from '../Icon';
import style from './style.styl';

export default class Button extends Component {
    static propTypes = {
        icon: PropTypes.string,
        to: PropTypes.string,
        type: PropTypes.string,
        className: PropTypes.string.isRequired,
        color: PropTypes.oneOf(['default', 'blue']).isRequired,
        children: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.string,
        ]),
    };

    static defaultProps = {
        className: '',
        color: 'default',
        type: 'button',
    };

    render() {
        const {
            children,
            className,
            color,
            icon,
            to,
            type,
            ...props
        } = this.props;

        return to
            ? (
                <Link className={`${style.container} ${style[color]} ${className}`} to={to} {...props}>
                    {children}
                    {icon ? <Icon name={icon} className={style.icon} /> : null}
                </Link>
            ) : (
                <button type={type} className={`${style.container} ${style[color]} ${className}`} {...props}>
                    {children}
                    {icon ? <Icon name={icon} className={style.icon} /> : null}
                </button>
            );
    }
}
