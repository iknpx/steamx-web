import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

import '@style/global.styl';
import { Header, Layout } from '@/components';

import { MainRoute } from './routes';
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
                        <Header />
                        <Route path='/' component={MainRoute} />
                    </Layout>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default hot(module)(App);
