import React, { Component } from "react"

class Footer extends Component {
    render(){
        return(
            <footer>
                <div id="social-links">
                    <a href="https://github.com/SethCaparelli" target="_blank">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/seth-caparelli/" target="_blank">
                        <i className="fab fa-linkedin-in fa-2x"></i>
                    </a>
                    <a href="https://www.instagram.com/bear.remington/" target="_blank">
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href="https://www.facebook.com/seth.caparelli.5" target="_blank">
                        <i className="fab fa-facebook-f fa-2x" href="https://www.facebook.com/seth.caparelli.5"></i>
                    </a>
                </div>
            </footer>
        )
    }
}
export default Footer