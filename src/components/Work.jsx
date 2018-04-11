import React, { Component } from "react"

class  Work extends Component {
    render(){
        return(
            <div className="work">
                <small>{this.props.cactus.name}</small>
                <img src={this.props.cactus.url} alt="/assets/icons/camera-logo.png"/>
                <button>Update</button>
                <button>Delete</button>
            </div>
        )
    }
}
export default Work