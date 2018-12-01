import React, { Component } from 'react';
import './loading.css';
import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar';

function ProgressBarFiller(props) {
    console.log(props)
    return <div className="filler" style={{ width: `${props.percentage}%` }}></div>
}
loadProgressBar(undefined, axios)
class Loading extends Component {

    // state ={
    //     percentage: 0
    // }

    render() {
        return (
            <div className="loading">
                <div className="progress_bar">
                    <ProgressBarFiller percentage={this.props.percentage} />
                </div>
                {!this.props.loading ? (
                    <button onClick={this.props.openApollo}>Click Me</button>
                ) : null}
            </div>
        )
    }

}

export default Loading;