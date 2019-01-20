// Core
import React, { Component } from 'react';

// Components
import Post from '../Post';
import Composer from '../Composer';
import StatusBar from '../StatusBar';

// Instruments
import Styles from './Styles.m.css';

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
