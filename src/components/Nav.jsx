import React, { Component } from "react"
import Modal from "react-responsive-modal"

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            openAbout: false,
            openResume: false,
            openContact: false,
        }
    }

    onOpenAboutModal = () => {
        this.setState({ openAbout: true });
      }

    onCloseAboutModal = () => {
        this.setState({ openAbout: false });
    }

    onOpenResumeModal = () => {
        this.setState({ openResume: true });
      }

    onCloseResumeModal = () => {
        this.setState({ openResume: false });
    }

    render(){
        const { openAbout } = this.state
        const { openResume } = this.state
        return(
            <div id="nav">
                <h5 onClick={this.onOpenAboutModal} className="nav-target">About</h5>
                <h5 onClick={this.onOpenResumeModal} className="nav-target">Contact</h5>
                <h5 className="nav-target">Resume</h5>
                <Modal classNames={{ overlay: 'about-overlay', modal: 'about-modal' }} open={openAbout} onClose={this.onCloseAboutModal} little>
                    <img id="profile-picture" src="/assets/icons/profile.png" alt="/assets/icons/camera-logo.png"/>
                    <p>I am an artist turned web developer. I have always loved building with my hands; but as a programmer, my mind
                    is my tool of choice.  The passion I have as an artist has transformed into creative problem solving in code.  I enjoy the process of building
                    applications that people can use to make their lives more enjoyable. It is difficult to make art that people use as often as
                    web application, The idea of bridging the gap between art and code is something I continually think about and to actually make an impact on the world
                    with my work is what drives me. I embrace the challenges of this industry and the constant evolution that I am excited to be apart </p>
                </Modal>
                <Modal classNames={{ overlay: 'resume-overlay', modal: 'resume-modal' }} open={openResume} onClose={this.onCloseResumeModal} little>
                       <p>high</p> {/* <iframe src="path/to/pdf" width="500" height="700"></iframe> */}
                </Modal>
            </div>
        )
    }
}
export default Nav