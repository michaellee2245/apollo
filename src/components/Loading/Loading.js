import React, { Component } from 'react';
import './loading.scss';
import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar';
import { ReactComponent as RocketIcon } from '../../assets/rocket-with-a-circle.svg';

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
            <div className="loading fade_in_page">
            <div className="a_mark"></div>
                {/* <div className="progress_bar">
                    <ProgressBarFiller percentage={this.props.percentage} />
                </div> */}
                {!this.props.loading ? (
                    <div className="fade_in_button">
                        <svg className="hidden">
                            <defs>
                                <clipPath id="clipBox" clipPathUnits="objectBoundingBox">
                                    <polygon points="0,0 0,1 0.35,1 0.35,0.6 0.65,0.6 0.65,1 1,1 1,0" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="box bg-1">
                            <button className="button button--itzel button--text-thick open-apollo" onClick={this.props.openApollo}>
                                <div id="rocket-icon">
                                    <RocketIcon className="button__icon" />

                                </div>
                                <span>Launch Project Apollo</span>
                            </button>

                        </div>
                    </div>
                )
                    :
                    null
                }

            </div>
        )
    }

}

export default Loading;