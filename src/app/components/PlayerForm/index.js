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
        forms: [{
            id: 1,
            value: '',
        }],
    };

    validateForm = () => {
        const { forms } = this.state;

        return !forms.filter(form => form.value.length === 0 || form.value.search(',') !== -1).length;
    }

    handleAdd = () => {
        const { forms } = this.state;

        this.setState({
            forms: [...forms, {
                id: forms.length + 1,
                valid: 0,
                value: '',
            }],
        });
    };

    handleInputChange = id => event => {
        const { value } = event.target;
        const { forms } = this.state;

        const index = forms.findIndex(form => form.id === id);

        this.setState({
            forms: [...forms.slice(0, index), { ...forms[index], valid: 0, value }, ...forms.slice(index + 1)],
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { dispatch } = this.props;
        const { forms } = this.state;

        const result = forms.reduce((result, form, index, players) => {
            return result + `${form.value.split('https://steamcommunity.com/id/')[1] || form.value}${index !== players.length - 1 ? ',' : ''}`;
        }, '');

        dispatch(push(`/games/${result}`));
    };

    render() {
        const { forms } = this.state;

        return (
            <Container className={style.container}>
                <form onSubmit={this.handleSubmit} className={style.form}>

                    <div className={style.panel}>
                        <span className={style.title}>Steam Account</span>
                        <span className={style.label}>Steam account name or profile link</span>
                        {forms.map(form => (
                            <input key={form.id}  type="text"
                                className={style.input}
                                onChange={this.handleInputChange(form.id)}
                                value={form.value}
                            />
                        ))}
                        <div className={style.buttons}>
                            <Button icon="plus" onClick={this.handleAdd}>Add</Button>
                            {this.validateForm() ? <Button type="submit">done</Button> : null}
                        </div>
                    </div>
                </form>
            </Container>
        );
    }
}
