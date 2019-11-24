import React, { Component } from 'react'

export default class Favourite extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }

    componentDidMount() {
        localStorage.getItem('favData')
    }

    render() {
        return (
            <div>
                <React.Fragment>

                </React.Fragment>    
            </div>
        )
    }
}
