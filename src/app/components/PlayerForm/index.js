import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import Button from '../Button';
import Container from '../Container';
import style from './style.styl';

@connect()
export default class PlayerForm extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
    };

    state = {
        activeFrom: 1,
        forms: [{
            id: 1,
            value: '',
        }],
    };

    handleAdd = id => () => {
        // TODO: check if value is valid
        // TODO: check if user exist
        // TODO: const { forms } = this.state;
        // TODO: const { value } = forms.find(form => form.id === id);
        // TODO: result = value.split('https://steamcommunity.com/id/')[1] || value

        this.setState({
            activeFrom: id + 1,
        }, () => this.putNewForm(id));
    };

    handleInputChange = id => event => {
        const { value } = event.target;
        const { forms } = this.state;

        const index = forms.findIndex(form => form.id === id);

        this.setState({
            forms: [...forms.slice(0, index), {...forms[index], value }, ...forms.slice(index + 1)],
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { dispatch } = this.props;
        // const { forms } = this.state;

        // const result = forms.reduce((result, form) => [
        //     ...result,
        //     form.value.split('https://steamcommunity.com/id/')[1] || form.value,
        // ], []);

        dispatch(push('/'));
    };

    putNewForm = id => {
        const { forms } = this.state;

        setTimeout(() => {
            this.setState({
                forms: [...forms, {
                    id: id + 1,
                    value: '',
                }],
            });
        }, 400);
    };

    render() {
        const { activeFrom, forms } = this.state;

        return (
            <Container className={style.container}>
                <form onSubmit={this.handleSubmit} className={style.form}>
                    {forms.map(form => (
                        <div key={form.id} className={`${style.panel} ${form.id < activeFrom ? style.hiddenLeft : ''}`}>
                            <span className={style.title}>Steam Account</span>
                            <label className={style.label}>Steam account name or profile link</label>
                            <input type="text"
                                className={style.input}
                                onChange={this.handleInputChange(form.id)}
                                value={form.value}
                            />
                            <div className={style.buttons}>
                                <Button type="submit">done</Button>
                                <Button icon="arrow-right" onClick={this.handleAdd(form.id)}>
                                    next
                                </Button>
                            </div>
                        </div>
                    ))}
                </form>
            </Container>
        );
    }
}
