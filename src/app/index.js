import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

import '@style/global.styl';
import { Header, Layout } from '@/components';

import { GamesRoute, MainRoute } from './routes';
import { onConnect } from './sockets';
import { store, history } from './store';

class App extends Component {
    componentDidMount() {
        store.dispatch(onConnect);
    }

    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Layout>
                        <Header />
                        <Route exact path='/' component={MainRoute} />
                        <Route path='/start' component={MainRoute} />
                        <Route path='/games/:players' component={GamesRoute} />
                    </Layout>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default hot(module)(App);
