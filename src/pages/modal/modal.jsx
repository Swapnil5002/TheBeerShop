import React, { Component } from 'react'
import './modal.css'

export default class Modal extends Component {
    render() {
        return (
            <div className="head-modal-container">
            <div className="modal">
                <img src={this.props.beerData.image_url} className="modal-image"/>
                    <div className="modal-container">
                        <h2 className="modal-heading">{this.props.beerData.name}</h2>
                        <p className="modal-tagline">{this.props.beerData.tagline}</p>
                            <hr className="hr" />
                        <div>
                            <span className="readings-title">IBU:</span><span className="readings">{this.props.beerData.ibu}</span>
                            <span className="readings-title">ABV:</span><span className="readings">{this.props.beerData.abv}</span>
                            <span className="readings-title">EBC:</span><span className="readings">{this.props.beerData.ebc}</span>
                        </div>
                        <div className="modal-description">
                            {this.props.beerData.description}
                        </div>
                        <div className="serving-options">Best served with:
                            {this.props.beerData.food_pairing.map((item) =>
                                <li>{item}</li>)}
                        </div>
                        <a href="" className="close-button">&times;</a>
                    </div>
            </div>
            </div>
        )
    }
}

