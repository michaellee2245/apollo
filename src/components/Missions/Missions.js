import React, { Component } from 'react';
import axios from 'axios';
import './missions.css';
import { ReactComponent as RocketIcon } from '../../assets/rocket-with-a-circle.svg';
class Missions extends Component {

    state = {
        selectedMission: -1,
        missions: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    }

    handleClick = i => e => {
        e.stopPropagation()
        console.log(i)
        this.setState({ selectedMission: i })
    }
    // handleClose = () => {
    //     this.setState
    // }
    render() {
        return (
            <div className="missions">
                {this.state.missions.map((mission, i) => (
                    <div
                        key={i}
                        className={`mission_tile ${
                            this.state.selectedMission === i ?
                                "selected_mission"
                                :
                                this.state.selectedMission !== -1 ?
                                    "mission_collapsed"
                                    :
                                    ""
                            }`}
                        onClick={this.handleClick(i)}
                    >
                        <div></div>
                        <div><button onClick={this.handleClick(-1)}></button></div>
                        
                        
                    </div>
                ))}
            </div>
        )
    }
}

export default Missions;