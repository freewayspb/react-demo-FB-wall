// Core
import React, { Component } from 'react';

// Components
import Post from '../Post';
import Composer from '../Composer';

// Instruments
import Styles from './Styles.m.css';
import StatusBar from '../StatusBar';

export default class Feed extends Component {
    render() {
        return (
            <section className = { Styles.feed }>
                <StatusBar />
                <Composer />
                <Post />
            </section>
        );
    }

}
