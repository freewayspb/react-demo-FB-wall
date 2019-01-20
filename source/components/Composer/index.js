// Core
import React, { Component } from 'react';

//Instruments
import avatarImg from '../../theme/assets/lisa.png';

export default class Composer extends Component {
    render() {
        return (
            <section>
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
