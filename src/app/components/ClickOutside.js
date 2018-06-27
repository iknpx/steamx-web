import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ClickOutside extends Component {
    static propTypes = {
        onClickOutside: PropTypes.func.isRequired,
        children: PropTypes.element.isRequired,
    };

    isTouch = false;

    handle = event => {
        const { onClickOutside } = this.props;

        if (event.type === 'touchend') {
            this.isTouch = true;
        }

        if (event.type === 'click' && this.isTouch) {
            return false;
        }

        if (!this.container.contains(event.target)) {
            onClickOutside(event);
        }
    };

    componentDidMount() {
        document.addEventListener('touchend', this.handle, true);
        document.addEventListener('click', this.handle, true);
    }

    componentWillUnmount() {
        document.removeEventListener('touchend', this.handle, true);
        document.removeEventListener('click', this.handle, true);
    }

    render() {
        const { children, ...props } = this.props;

        return (
            <div {...props} ref={referance => this.container = referance}>
                {children}
            </div>
        );
    }
}
