// Core
import React, { Component } from 'react';

//Components
import Post from '../Post';
import Composer from '../Composer';

export default class Feed extends Component {
    render() {
        return (
            <section>
                <Composer />
                <Post />
            </section>
        );
    }

}
