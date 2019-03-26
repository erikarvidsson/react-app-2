import React, { Component } from 'react';
import './App.css';
import Cards from '../Cards';
import Button from '../Button';
// import Test from '../Test';
//
// var cors = require('cors');
// app.use(cors());

class App extends Component {
  state = {
      beer: [],
      panda_img: [],
      paly: false
    }

    componentDidMount() {
      this.fetchApi();
    }

    fetchApi = () => {
      const api = 'https://api.punkapi.com/v2/beers/random';

      fetch(api)
      .then(res => res.json())
      .then(data =>{
        this.setState({
          beer: data[0]
      })
      })
    }


  render() {
    console.log(this.state.beer.food_pairing);
    // console.log(this.state.panda_img);
    // console.log(this.state.beer.name);
    return (
      <div className="App">
        <Cards
          name={ this.state.beer.name }
          image={ this.state.beer.image_url }
          description={ this.state.beer.description }
          foodPairing={ this.state.beer.food_pairing }
        />

        <Button handleButton={this.fetchApi}/>
      </div>
    );
  }
}

export default App;
