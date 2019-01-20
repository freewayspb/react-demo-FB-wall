// Core
import React, { Component } from 'react';

//Instruments
import Styles from './styles.m.css';

export default class StatusBar extends Component {
    render() {
        const {
            avatar,
            currentUserFirstName,
            currentUserLastName,
        } = this.props;

        return (
            <section className = { Styles.statusBar }>
                <button>
                    <img
                        alt = 'avatar'
                        src = { avatar }
                    />
                    <span>{ currentUserFirstName}</span>
                    <span>{ currentUserLastName }</span>
                </button>
            </section>
        );
    }

}
