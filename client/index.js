import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute, Router } from 'react-router'
import App from './containers/app/app';
import Home from './components/home/home'
import signin from './containers/signin/signin';
import signup from './containers/signup/signup';
import './index.css';
import store from './store'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// ...
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const syncedHistory = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    //Wraping up in Provider
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={syncedHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home} />
                    <Route path='signup' component={signup} />
                    <Route path='signin' component={signin} />
                </Route>
            </Router>
        </MuiThemeProvider>
    </Provider>
    ,
    document.getElementById('root')
);
