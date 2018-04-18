import React, { Component } from "react"
import Modal from "react-responsive-modal"
import Lightbox from 'react-image-lightbox'

class Work extends Component {
    constructor() {
        super()
        this.state = {
            openApp: false,
            isOpen: false,
            photoIndex: 0
        }
    }

    onOpenAppModal = () => {
        this.setState({ openApp: true });
      }

    onCloseAppModal = () => {
        this.setState({ openApp: false });
    }

    render(){
        const images = this.props.collection.map(work => {
            return work.url
        })
        const captions = this.props.collection.map(work => {
            return work.material
        })
        const titles = this.props.collection.map(work => {
            return work.name
        })
        const { isOpen, photoIndex } = this.state
        const { openApp } = this.state

        if(this.props.work.type === "app") {
            return (
               <div id="app-work" className="work">
                    <small id="work-title">{this.props.work.name}</small>
                    <img src={this.props.work.url} className="app-img" alt="work" id="work-img" onClick={() => this.setState({ openApp: true })} />
                    <Modal classNames={{ overlay: 'app-overlay', modal: 'app-modal' }} open={openApp} onClose={this.onCloseAppModal} little>
                        <img id="app-gif" src={this.props.work.url} alt="app-gif"/>
                        <div id="tech-icon-container">
                            {this.props.work.technologies.map(tech => <img className="tech-icon" key={tech} src={tech} alt="tech" />)}
                        </div>
                        <p id="app-description">{this.props.work.description}</p>
                        <div id="app-button-container">
                            <button id="code-button" className="app-button" onClick={() => window.open(this.props.work.code, "_blank")}>See Code</button>
                            {this.props.work.site !== "" ? <button id="site-button" className="app-button" onClick={() => window.open(this.props.work.site, "_blank")}>Visit Site</button> : ""}
                        </div>
                    </Modal>
               </div>
            )
        } else {
            return (
                <div className="work">
                    <small id="work-title">{this.props.work.name}</small>
                    <div>
                        <img id="work-img" onClick={() => this.setState({ isOpen: true, photoIndex: this.props.index })} src={this.props.work.url} alt="work"/>
                        {isOpen && (
                        <Lightbox
                            imageTitle={titles[photoIndex]}
                            imageCaption={captions[photoIndex]}
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                            }
                            onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                            }
                        />
                        )}
                    </div>
                </div>
            )
        }
    }
}

export default Work
