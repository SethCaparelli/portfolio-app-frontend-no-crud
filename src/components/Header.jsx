import React, { Component } from 'react'
import Nav from "./Nav"


class Header extends Component {
    render() {
        return (
            <header>
                <div id="logo-container">
                    <img id="sc-logo" src="/assets/icons/personal-logo.png" alt="personal-icon"/>
                    <h1>Seth Caparelli</h1>
                </div>
                <Nav />
            </header>
        )
    }
}

export default Header