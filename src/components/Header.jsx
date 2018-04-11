import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <header>
                <div id="logo-container">
                    <img id="sc-logo" src="/assets/icons/personal-logo.png" alt="personal-icon"/>
                    <h1>Seth Caparelli</h1>
                </div>
            </header>
        )
    }
}

export default Header