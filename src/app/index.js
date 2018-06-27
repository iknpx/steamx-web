import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

import '@style/global.styl';
import { Layout } from '@/components';

import { StartPage } from './routes';
import { onConnect } from './sockets';
import { store, history } from './store';

class App extends Component {
    componentDidMount() {
        onConnect(store.dispatch);
    }

    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Layout>
                        <Switch>
                            <Route exact path='/' component={StartPage} />
                            <Redirect to="/" />
                        </Switch>
                    </Layout>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default hot(module)(App);
