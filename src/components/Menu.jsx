import React, { Component } from "react"

class Menu extends Component {
    render(){
        return(
            <div id="menu">
                <button onClick={this.props.getCactus}>Cactus^3</button>
                <button onClick={this.props.getTree}>Reclaim Tree</button>
                <button onClick={this.props.getSculpture}>Sculpture</button>
                <button onClick={this.props.getVessel}>Vessel</button>
                <button onClick={this.props.getPainting}>Painting</button>
                <button onClick={this.props.getAdvertising}>Advertising</button>
                <button onClick={this.props.getDesign}>Graphic Design</button>
            </div>
        )
    }
}


export default Menu