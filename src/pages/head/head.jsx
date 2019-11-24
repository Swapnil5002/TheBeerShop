import React from 'react';
import './head.css';

export default class Head extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange() {

    }

    render() {
        return(
            <React.Fragment>
                <div className="container">
                <div className="container-sub">
                    <span className="home">Home</span>
                    <span className="favourite">Favourite</span>
                </div>
                <div className="head-container">
                    <h3 className="heading">The Beer Bank</h3>
                    <p className="title">Find your favourite beer here</p>
                    <input className="input-holder" placeholder="Search for beer name" type="text" onChange={this.handleOnChange}/>
                </div>
                </div>
            </React.Fragment>
        )
    }
}