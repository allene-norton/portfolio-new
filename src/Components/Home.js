import React, { Component } from 'react';
import Nav from './Nav.js'

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Nav />
                <h1>Test</h1>
            </div>
        );
    }
}