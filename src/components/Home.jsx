import React, { Component } from "react"
import Header from "./Header"
import Work from "./Work"
import Menu from "./Menu"
import Footer from "./Footer"

class App extends Component {
  constructor() {
    super()
    this.state = {
      showResume: false,
      showAbout: false,
      showWork: true,
      work: []
    }
  }

  componentDidMount() {
    fetch("https://aqueous-dusk-19159.herokuapp.com/cactus")
    .then(response => {
      return response.json()
    })
    .then((data) => {
      this.setState({
        work: data.cactus
      })
    })
  }

  getTree = () => {
    fetch("https://aqueous-dusk-19159.herokuapp.com/tree")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({
        work: data.tree
      })
    })
  }

  getCactus = () => {
    fetch("https://aqueous-dusk-19159.herokuapp.com/cactus")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({
        work: data.cactus
      })
    })
  }

  getSculpture = () => {
    fetch("https://aqueous-dusk-19159.herokuapp.com/sculpture")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({
        work: data.sculpture
      })
    })
  }

  getVessel = () => {
    fetch("https://aqueous-dusk-19159.herokuapp.com/vessel")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({
        work: data.vessel
      })
    })
  }

  getPainting = () => {
    fetch("https://aqueous-dusk-19159.herokuapp.com/painting")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({
        work: data.painting
      })
    })
  }

  getAdvertising = () => {
    fetch("https://aqueous-dusk-19159.herokuapp.com/advertising")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({
        work: data.advertising
      })
    })
  }

  getDesign = () => {
    fetch("https://aqueous-dusk-19159.herokuapp.com/design")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({
        work: data.design
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div id="work-body-container">
          <Menu
            getTree={this.getTree}
            getCactus={this.getCactus}
            getSculpture={this.getSculpture}
            getVessel={this.getVessel}
            getPainting={this.getPainting}
            getAdvertising={this.getAdvertising}
            getDesign={this.getDesign}
          />
          <div className="work-body">
            {this.state.work
              ? this.state.work.map(cactus => <Work key={cactus.id} cactus={cactus}/>)
              : ""}
              <div className="work" id="add-work">
                <img src="/assets/icons/camera-logo.png" alt="work"/>
                <button>Add Work</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App
