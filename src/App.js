import React, { Component } from 'react'
import './App.css'
import Head from './pages/head/head.jsx'
import Beer from './pages/beer/beer.jsx'
import axios from 'axios'
import { all } from 'q'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
        allData: [],
        toBeShownData: []
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    axios.get(`https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6`)
    .then(res => {
        const allData = res.data
        this.setState({
            allData,
            toBeShownData: allData
        })
    });     
}


handleSearchChange(searchText) {
  const searchedData = this.state.allData.filter((data) => data.name.match(searchText))
  if(searchText) {
    this.setState({
      toBeShownData: searchedData
    })
  } else {
    this.setState({
      toBeShownData: this.state.allData
    })
  }
 
}


  render() {
    return (
      <div className="App">
        <Head handleSearchChange={this.handleSearchChange}/>
        <Beer data={this.state.toBeShownData}/>
      </div>
    )
  }
}

export default App;
