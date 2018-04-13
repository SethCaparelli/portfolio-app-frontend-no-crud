import React, { Component } from "react"
import Modal from "react-responsive-modal"

class Work extends Component {
    constructor() {
        super()
        this.state = {
            openUpdate: false,
            openDelete: false
        }
    }

    updateWork = (event) => {
        const url = `https://aqueous-dusk-19159.herokuapp.com/${this.props.work.type}/${this.props.work.id}`
        event.preventDefault()
        const data = {
            name: this.nameInput.value,
            material: this.materialInput.value,
            url: this.urlInput.value,
            type: this.props.work.type
        }
        fetch(url, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if(response.status === 200) {
                this.setState({
                    openUpdate: false
                })
            }
        })
        .catch(error => console.log(error))
    }

    deleteWork = () => {
        const url = `https://aqueous-dusk-19159.herokuapp.com/${this.props.work.type}/${this.props.work.id}`
        fetch(url, {
            method: "DELETE"
        })
        .then(response => {
            if(response.status === 204) {
                this.setState({
                    openDelete: false
                })
            }
        })
    }

    onOpenUpdateModal = () => {
        this.setState({ openUpdate: true });
      }

    onCloseUpdateModal = () => {
        this.setState({ openUpdate: false });
    }

    onOpenDeleteModal = () => {
        this.setState({ openDelete: true });
      }

    onCloseDeleteModal = () => {
        this.setState({ openDelete: false });
    }

    render(){
        const { openUpdate } = this.state
        const { openDelete } = this.state
        return(
            <div className="work">
                <small id="work-title">{this.props.work.name}</small>
                <img src={this.props.work.url} alt="http://localhost:3000/assets/icons/camera-logo.png"/>
                <div id="button-container">
                    <button onClick={this.onOpenUpdateModal}>Edit</button>
                    <button onClick={this.onOpenDeleteModal}>Delete</button>
                </div>
                <Modal classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }} open={openUpdate} onClose={this.onCloseUpdateModal} little>
                    <h2>Update</h2>
                    <form ref={(input) => {this.updateForm = input}} onSubmit={(e) => {this.updateWork(e)}} id="update-form">
                        <div className="input" id="name-input">
                            <label htmlFor="name">Name</label>
                            <input ref={(i) => {this.nameInput = i}} type="text" placeholder={this.props.work.name}/>
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
                <Modal classNames={{ overlay: 'custom-overlay-2', modal: 'custom-modal-2' }} open={openDelete} onClose={this.onCloseDeleteModal} little>
                    <h3 id="delete-modal-header">Are you sure you want to delete {this.props.work.name}?</h3>
                    <div id="delete-buttons">
                        <button onClick={this.deleteWork}>YES</button>
                        <button onClick={this.deleteWork}>NO</button>
                    </div>

                </Modal>
            </div>
        )
    }
}
export default Work