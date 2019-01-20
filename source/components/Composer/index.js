// Core
import React, { Component } from 'react';

//Instruments
import avatarImg from '../../theme/assets/lisa.png';
import Styles from './styles.m.css';

export default class Composer extends Component {
    render() {
        return (
            <section className = { Styles.composer }>
                <img
                    alt = 'avatar'
                    src = { avatarImg }
                />
                <form>
                    <textarea placeholder = { `What's on your mind Lisa` } />
                    <input
                        type = 'submit'
                        value = 'Post'
                    />
                </form>
            </section>
        );
    }

}
