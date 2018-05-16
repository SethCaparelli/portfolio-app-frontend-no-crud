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
      work: [
        {
          name: "Boomerang",
          description: "A Native app that allows users to send friends a beverage, aka boomerang, from their favorite bars or restaurants.  Just find friends and follow spots to send your loved ones a QR code redeemable for a boomerang.  Then just sit back and wait for your freinds to send one back",
          technologies: ["/assets/technologies/react-native-icon.png", "/assets/technologies/express-icon.png", "/assets/technologies/node-icon.png", "/assets/technologies/aws-icon.png", "/assets/technologies/mongo-icon.png"],
          url: "/assets/gifs/boomerang.gif",
          type: "app",
          code: "https://github.com/SethCaparelli/boomerang",
          youtube: "https://www.youtube.com/watch?v=U7gta2GPU7E"
          }, {
          name: "Fridge Vision",
          description: "A Native app that allows users to capture a photo of their fridge or pantry with their mobile device.  Fridge Vision then uses an image recognition API to create a list of ingredients. Users are then presented with recipes that they can make with the available food items they already have.",
          technologies: ["/assets/technologies/react-native-icon.png", "/assets/technologies/express-icon.png", "/assets/technologies/node-icon.png", "/assets/technologies/aws-icon.png", "/assets/technologies/postgresql-icon.png", "/assets/technologies/jest-icon.png", "/assets/technologies/knex-icon.png"],
          url: "/assets/gifs/fridge-vision.gif",
          type: "app",
          code: "https://github.com/SethCaparelli/fridge-vision",
          youtube: "https://youtu.be/yDZoRcStXVQ",
        }, {
          name: "Music@",
          description: "Oauth2 connects users to their Spotify account and populates the page with their followed artists. With a click of a button, users are able to bring up the tour information from the Bands In Town Api for their favorite artists",
          technologies: ["/assets/technologies/react-icon-2.png", "/assets/technologies/html-logo.png", "/assets/technologies/css-icon.png", "/assets/technologies/bootstrap-icon.png", "/assets/technologies/node-icon.png", "/assets/technologies/cypress-icon.png"],
          url: "/assets/gifs/music.gif",
          type: "app",
          code: "https://github.com/SethCaparelli/music-app-frontend",
          site: "http://www.music-at.surge.sh",
          icon: "/assets/app-icons/music@-icon-og.png"
        }, {
          name: "Cocktail=>",
          description: "An app that allows users to search for cocktails based off name, ingredient, or random. It then prompts users to search for the corresponding recipe.",
          technologies: ["/assets/technologies/react-icon-2.png", "/assets/technologies/html-logo.png", "/assets/technologies/css-icon.png", "/assets/technologies/bootstrap-icon.png", "/assets/technologies/cypress-icon.png"],
          url: "/assets/gifs/cocktail.gif",
          type: "app",
          code: "https://github.com/SethCaparelli/cocktail-app-react",
          site: "http://www.cocktail.surge.sh",
          icon: "/assets/app-icons/cocktail-logo.png"
      }],
      workTitle: "Apps"
    }
  }

  componentDidMount() {
    fetch("https://aqueous-dusk-19159.herokuapp.com/tree")
    .then((response) => {
      return response.json()
    })
  }

  addWork = (event) => {
    const url = `https://aqueous-dusk-19159.herokuapp.com/${this.state.work[0].type}`
    event.preventDefault()
    const data = {
        name: this.nameInput.value,
        material: this.materialInput.value,
        url: this.urlInput.value,
        type: this.state.work[0].type,
    }
    fetch(url, {
        method: "Post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(response => {
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

  getApp = () => {
    this.setState({
      work: [
        {
          name: "Boomerang",
          description: "A Native app that allows users to send friends a beverage, aka boomerang, from their favorite bars or restaurants.  Just find friends and follow spots to send your loved ones a QR code redeemable for a boomerang.  Then just sit back and wait for your freinds to send one back",
          technologies: ["/assets/technologies/react-native-icon.png", "/assets/technologies/express-icon.png", "/assets/technologies/node-icon.png", "/assets/technologies/aws-icon.png", "/assets/technologies/mongo-icon.png"],
          url: "/assets/gifs/boomerang.gif",
          type: "app",
          code: "https://github.com/SethCaparelli/boomerang",
          youtube: "https://www.youtube.com/watch?v=U7gta2GPU7E"
          }, {
          name: "Fridge Vision",
          description: "A Native app that allows users to capture a photo of their fridge or pantry with their mobile device.  Fridge Vision then uses an image recognition API to create a list of ingredients. Users are then presented with recipes that they can make with the available food items they already have.",
          technologies: ["/assets/technologies/react-native-icon.png", "/assets/technologies/express-icon.png", "/assets/technologies/node-icon.png", "/assets/technologies/aws-icon.png", "/assets/technologies/postgresql-icon.png", "/assets/technologies/jest-icon.png", "/assets/technologies/knex-icon.png"],
          url: "/assets/gifs/fridge-vision.gif",
          type: "app",
          code: "https://github.com/SethCaparelli/fridge-vision",
          youtube: "https://youtu.be/yDZoRcStXVQ",
        }, {
          name: "Music@",
          description: "Oauth2 connects users to their Spotify account and populates the page with their followed artists. With a click of a button, users are able to bring up the tour information from the Bands In Town Api for their favorite artists",
          technologies: ["/assets/technologies/react-icon-2.png", "/assets/technologies/html-logo.png", "/assets/technologies/css-icon.png", "/assets/technologies/bootstrap-icon.png", "/assets/technologies/node-icon.png", "/assets/technologies/cypress-icon.png"],
          url: "/assets/gifs/music.gif",
          type: "app",
          code: "https://github.com/SethCaparelli/music-app-frontend",
          site: "http://www.music-at.surge.sh",
          icon: "/assets/app-icons/music@-icon-og.png"
        }, {
          name: "Cocktail=>",
          description: "An app that allows users to search for cocktails based off name, ingredient, or random. It then prompts users to search for the corresponding recipe.",
          technologies: ["/assets/technologies/react-icon-2.png", "/assets/technologies/html-logo.png", "/assets/technologies/css-icon.png", "/assets/technologies/bootstrap-icon.png", "/assets/technologies/cypress-icon.png"],
          url: "/assets/gifs/cocktail.gif",
          type: "app",
          code: "https://github.com/SethCaparelli/cocktail-app-react",
          site: "http://www.cocktail.surge.sh",
          icon: "/assets/app-icons/cocktail-logo.png"
      }],
      workTitle: "Apps"
    })
  }

  getTree = () => {
    this.setState({
      work: [],
      workTitle: "Reclaim Tree"
    })
    fetch("https://aqueous-dusk-19159.herokuapp.com/tree")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({
        work: data.tree,
      })
    })
  }

  getCactus = () => {
    this.setState({
      work: [],
      workTitle: "Cactus^3"
    })
    fetch("https://aqueous-dusk-19159.herokuapp.com/cactus")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({
        work: data.cactus,
      })
    })
  }

  getSculpture = () => {
    this.setState({
      work: [],
      workTitle: "Sculpture"
    })
    fetch("https://aqueous-dusk-19159.herokuapp.com/sculpture")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({
        work: data.sculpture,
      })
    })
  }

  getVessel = () => {
    this.setState({
      work: [],
      workTitle: "Vessel"
    })
    fetch("https://aqueous-dusk-19159.herokuapp.com/vessel")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({
        work: data.vessel,
      })
    })
  }

  getPainting = () => {
    this.setState({
      work: [],
      workTitle: "Painting"
    })
    fetch("https://aqueous-dusk-19159.herokuapp.com/painting")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({
        work: data.painting,
      })
    })
  }

  getAdvertising = () => {
    this.setState({
      work: [],
      workTitle: "Advertising"
    })
    fetch("https://aqueous-dusk-19159.herokuapp.com/advertising")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({
        work: data.advertising,
      })
    })
  }

  getDesign = () => {
    this.setState({
      work: [],
      workTitle: "Design"
    })
    fetch("https://aqueous-dusk-19159.herokuapp.com/design")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({
        work: data.design,
      })
    })
  }

  render() {
    const {openModal} = this.state
    return (
      <div className="App">
        <Header />
        <div id="work-body-container">
          <h3 id="work-header">{this.state.workTitle}</h3>
          <div className="work-body">
          {this.state.work.length > 0
            ? this.state.work.map((work, index, collection) => <Work key={index} index={index} collection={collection} allWork={this.state.work} work={work}/>)
            : <div id="loader-container"><div className="loader">Loading...</div></div>}
          </div>
          <Menu
            getApp={this.getApp}
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
