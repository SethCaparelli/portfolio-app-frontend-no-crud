import React, { Component } from "react"

class Footer extends Component {
    render(){
        return(
            <footer>
                <small>&copy; Seth Caparelli 2018</small>
                <div id="social-links">
                    <a href="https://github.com/SethCaparelli" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/seth-caparelli/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.instagram.com/bear.remington/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/seth.caparelli.5" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f" href="https://www.facebook.com/seth.caparelli.5"></i>
                    </a>
                    <a href="https://soundcloud.com/sethatronus_rex" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-soundcloud"></i>
                    </a>
                </div>
            </footer>
        )
    }
}
export default Footer