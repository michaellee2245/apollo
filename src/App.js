import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Loading from './components/Loading/Loading';
import Apollo from './components/Apollo/Apollo';



class App extends Component {

  state = {
    loading: true,
    percentage:0
  };

  componentDidMount(){
    // let config = {
    //   onDownloadProgress: progressEvent => {
    //     let percentCompleted = Math.floor((progressEvent.loaded * 100) / 387003 );
    //     this.setState({percentage:percentCompleted})
    //     console.log(progressEvent)

    //     // do whatever you like with the percentage complete
    //     // maybe dispatch an action that will update a progress bar or something
    //   }
    // }
    // axios.get('https://pokeapi.co/api/v2/pokemon/1/', config)
    // .then(res => console.log(res))
    setTimeout(() => this.setState({loading: false}), 2000)
  }



  render() {
    
    const { loading } = this.state;

    if(loading){
      return <Loading />  //percentage={this.state.percentage}
    }

    return (
      <div className="App">
        <Apollo />
      </div>
    );
  }
}

export default App;
