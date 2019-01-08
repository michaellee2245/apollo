import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Loading from './components/Loading/Loading';
import Apollo from './components/Apollo/Apollo';

// import { loadProgressBar } from 'axios-progress-bar';

// loadProgressBar(undefined, axios)

class App extends Component {

  state = {
    loading: true,
    waiting: true
  };


  componentDidMount() {
      
        setTimeout(() => {
          this.setState({ loading: false })
        }, 1500)
      



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
    // setTimeout(() => this.setState({ loading: false }), 2000)
  }

  openApollo = () => {
    this.setState({ waiting: false })
  }


  render() {

    const { loading, waiting } = this.state;

    if (waiting) {
      return <Loading loading={loading} openApollo={this.openApollo}/>  //percentage={this.state.percentage}
    }


    return (
      
        
          <div className="App">
            <Apollo />
          </div>
        
      
    );
  }
}

export default App;
