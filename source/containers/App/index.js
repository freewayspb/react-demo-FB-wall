// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

//Componnts
import Feed from '../../components/Feed';

//Instruments
import avatar from '../../theme/assets/lisa.png';

const options = {
    avatar,
    currentUserFirstName: 'Lisa',
    currentUserLastName:  'Simpson',
};
@hot(module)
export default class App extends Component {
    render() {
        return (
            <Feed { ...options } />
        );
    }
}
