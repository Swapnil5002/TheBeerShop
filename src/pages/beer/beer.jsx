import React from 'react';
import axios from 'axios';
import './beer.css';
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from '../modal/modal.jsx';

export default class Beer extends React.Component {
    constructor(props) {
        super(props);
            this.state={    
                    shoulShowModal: false
        }
    }
        


    handleClick(id) {

        const data = this.state.allData.filter((item) => item.id == id)[0];
        this.setState({
            beerData: data,
            shoulShowModal: true
        })
    }

    handleChange(id) {
        const favData = this.state.allData.filter((item) => item.id == id)[0];
        const localData = JSON.parse(localStorage.getItem('favData'));
        if(localData && localData.length > 0) {
            let localstore = localData;
            localData.push(id);
            localStorage.setItem('favData', JSON.stringify(localstore));
        } else {
            let favDataLocal = [];
            favDataLocal.push(id);
            localStorage.setItem("favData", JSON.stringify(favDataLocal));
        }   
        this.setState({
            favBeer: favData
        })
    }

    render() {
        return(
            <React.Fragment>
                <div className="main-container">
                    <div className="container-beer">
                        {this.props.data.map((data) => (
                            <div className="content" id={data.id} onClick={this.handleClick.bind(this, data.id)}>
                                <div className="content-container">
                                    <div className="image-container">
                                        <FontAwesomeIcon icon ={faCog} className="icon" onClick={this.handleChange.bind(this, data.id)}/>
                                        <img src={data.image_url} className="image" />
                                    </div>
                                    <p className="container-name"><b>{data.name}</b></p>
                                    <p className="container-tagline">{data.tagline}</p>
                                </div>
                            </div>
                            ))} 
                            {this.state.shoulShowModal ? <Modal beerData={this.state.beerData}/> : ""}   
                    </div>
                </div>
            </React.Fragment>
        )
    }
}