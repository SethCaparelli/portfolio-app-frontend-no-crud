import React, { Component } from "react"

class Menu extends Component {
    render(){
        return(
            <div id="menu">
                <div className="icon-container" id="cactus-container">
                    <img className="icon-image" id="cactus-icon" src="/assets/icons/cactus-icon.png" alt="/assets/icons/camera-icon.png" onClick={this.props.getCactus}/>
                    <small>Cactus</small>
                </div>
                <div className="icon-container" id="tree-container">
                    <img className="icon-image" id="tree-icon" src="/assets/icons/tree-icon.png" alt="/assets/icons/camera-icon.png" onClick={this.props.getTree}/>
                    <small>Reclaim Tree</small>
                </div>
                <div className="icon-container" id="sculpture-container">
                    <img className="icon-image" id="sculpture-icon" src="/assets/icons/sculpture-icon.png" alt="/assets/icons/camera-icon.png" onClick={this.props.getSculpture}/>
                    <small>Sculpture</small>
                </div>
                <div className="icon-container" id="vessel-container">
                    <img className="icon-image" id="vessel-icon" src="/assets/icons/vessel-icon.png" alt="/assets/icons/camera-icon.png" onClick={this.props.getVessel}/>
                    <div>
                        <small>Vessel</small>
                    </div>
                </div>
                <div className="icon-container" id="painting-container">
                    <img className="icon-image" id="painting-icon" src="/assets/icons/painting-icon.png" alt="/assets/icons/camera-icon.png" onClick={this.props.getPainting}/>
                    <small>Painting</small>
                </div>
                <div className="icon-container" id="advertising-container">
                    <img className="icon-image" id="advertising-icon" src="/assets/icons/advertising-icon.png" alt="/assets/icons/camera-icon.png" onClick={this.props.getAdvertising}/>
                    <small>Advertising</small>
                </div>
                <div className="icon-container" id="design-container">
                    <img className="icon-image" id="design-icon" src="/assets/icons/design-icon.png" alt="/assets/icons/camera-icon.png" onClick={this.props.getDesign}/>
                    <small>Graphic Design</small>
                </div>
            </div>
        )
    }
}


export default Menu