import React, { Component } from "react"

class Menu extends Component {
    render(){
        return(
            <div id="menu">
                    <img className="icon-image" id="cactus-icon" src="/assets/icons/cactus-icon.png" alt="/assets/icons/camera-icon.png" onClick={this.props.getCactus}/>
                    <img className="icon-image" id="tree-icon" src="/assets/icons/tree-icon.png" alt="/assets/icons/camera-icon.png" onClick={this.props.getTree}/>
                    <img className="icon-image" id="sculpture-icon" src="/assets/icons/sculpture-icon.png" alt="/assets/icons/camera-icon.png" onClick={this.props.getSculpture}/>
                    <img className="icon-image" id="vessel-icon" src="/assets/icons/vessel-icon.png" alt="/assets/icons/camera-icon.png" onClick={this.props.getVessel}/>
                    <img className="icon-image" id="painting-icon" src="/assets/icons/painting-icon.png" alt="/assets/icons/camera-icon.png" onClick={this.props.getPainting}/>
                    <img className="icon-image" id="advertising-icon" src="/assets/icons/advertising-icon.png" alt="/assets/icons/camera-icon.png" onClick={this.props.getAdvertising}/>
                    <img className="icon-image" id="design-icon" src="/assets/icons/design-icon.png" alt="/assets/icons/camera-icon.png" onClick={this.props.getDesign}/>
            </div>
        )
    }
}


export default Menu