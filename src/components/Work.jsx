import React, { Component } from "react"

class  Work extends Component {
    render(){
        return(
            <div id="work">
                <small>{this.props.cactus.name}</small>
                <img src={this.props.cactus.url} alt="work"/>
            </div>
        )
    }
}
export default Work