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
        const { avatar, currentUserFirstName } = this.props;

        return (
            <section className = { Styles.feed }>
                <StatusBar { ...this.props } />
                <Composer
                    avatar = { avatar }
                    currentUserFirstName = { currentUserFirstName }
                />
                <Post { ...this.props } />
            </section>
        );
    }
}
