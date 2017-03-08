import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

import Main from '../main/Main'

class App extends Component {


    render() {
        return (
            <div>
                <Main />
                {this.props.children}
            </div>

        );
    }
}

export default App;
