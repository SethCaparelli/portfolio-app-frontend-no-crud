import React, { Component } from "react"
import Header from "./Header"
import Work from "./Work"
import Menu from "./Menu"
import Footer from "./Footer"
import Modal from "react-responsive-modal"

class App extends Component {
  constructor() {
    super()
    this.state = {
      openModal: false,
      work: [],
      workTitle: ""
    }
  }

  addWork = (event) => {
    const url = `https://aqueous-dusk-19159.herokuapp.com/${this.state.work[0].type}`
    event.preventDefault()
    console.log(url)
    const data = {
        name: this.nameInput.value,
        material: this.materialInput.value,
        url: this.urlInput.value,
        type: this.state.work[0].type,
    }
    console.log(data)
    fetch(url, {
        method: "Post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(response => {
      console.log(response)
        if(response.status === 201) {
            this.setState({
                openModal: false
            })
        }
    })
  }

  onOpenModal = () => {
    this.setState({ openModal: true });
  }

  onCloseModal = () => {
      this.setState({ openModal: false });
  }

  componentDidMount() {
    fetch("https://aqueous-dusk-19159.herokuapp.com/cactus")
    .then(response => {
      return response.json()
    })
    .then((data) => {
      this.setState({
        work: data.cactus,
        workTitle: "Cactus^3"
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
        work: data.tree,
        workTitle: "Reclaim Tree"
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
        work: data.cactus,
        workTitle: "Cactus^3"
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
        work: data.sculpture,
        workTitle: "Sculpture"
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
        work: data.vessel,
        workTitle: "Vessel"
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
        work: data.painting,
        workTitle: "Painting"
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
        work: data.advertising,
        workTitle: "Advertising"
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
        work: data.design,
        workTitle: "Design"
      })
    })
  }

  render() {
    console.log(this.state.work.length)
    const {openModal} = this.state
    return (
      <div className="App">
        <Header />
        <div id="work-body-container">
          <h3 id="work-header">{this.state.workTitle}</h3>
          <div className={this.state.work.length > 0 ? "work-body" : "work-body-small"}>
            {this.state.work.length > 0
              ? this.state.work.map(work => <Work key={work.id} work={work}/>)
              : <div id="loader-container"><div className="loader">Loading...</div></div>}
              <div className="work" id="add-work">
                <img src="/assets/icons/camera-logo.png" alt="work"/>
                <button onClick={this.onOpenModal}>Add Work</button>
            </div>
          </div>
          <Menu
            getTree={this.getTree}
            getCactus={this.getCactus}
            getSculpture={this.getSculpture}
            getVessel={this.getVessel}
            getPainting={this.getPainting}
            getAdvertising={this.getAdvertising}
            getDesign={this.getDesign}
          />
        </div>
        <Modal classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }} open={openModal} onClose={this.onCloseModal} little>
          <h2>Add Work</h2>
          <form onSubmit={(e) => {this.addWork(e)}} id="update-form">
              <div className="input" id="name-input">
                  <label htmlFor="name">Name</label>
                  <input ref={(i) => {this.nameInput = i}} type="text"/>
              </div>
              <div className="input" id="material-input">
                  <label htmlFor="material">Material</label>
                  <input ref={(i) => {this.materialInput = i}} type="text"/>
              </div>
              <div className="input" id="url-input">
                  <label htmlFor="url">Picture URL</label>
                  <input ref={(i) => {this.urlInput = i}} type="text"/>
              </div>
              <input type="submit"/>
          </form>
        </Modal>
        <Footer />
      </div>
    );
  }
}

export default App
