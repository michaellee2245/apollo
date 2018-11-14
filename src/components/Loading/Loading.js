import React, { Component } from 'react';
import './loading.css';

function ProgressBarFiller(props) {
    console.log(props)
    return <div className="filler" style={{width: `${props.percentage}%`}}></div>
}

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

            </div>
        )
    }

}

export default Loading;