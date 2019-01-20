// Core
import React, { Component } from 'react';
import moment from 'moment';

//Instruments
import avatarImg from '../../theme/assets/lisa.png';

export default class Post extends Component {
    render() {
        return (
            <section>
                <img
                    alt = 'avatar'
                    src = { avatarImg }
                />
                <a>Lisa Simpson</a>
                <time>{ moment().format('MMMM D h:mm:ss a') }</time>
                <p>Howdy! </p>
            </section>
        );
    }

}
