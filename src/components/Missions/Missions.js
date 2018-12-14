import React, { Component } from 'react';
import axios from 'axios';
import './missions.scss';
import { ReactComponent as RocketIcon } from '../../assets/rocket-with-a-circle.svg';
class Missions extends Component {

    state = {
        selectedMission: -1,
        missions: []
    }

    handleClick = i => e => {
        e.stopPropagation()
        console.log(i)
        this.setState({ selectedMission: i })
    }
    // handleClose = () => {
    //     this.setState
    // }
    componentDidMount(){
        this.missionTile();
    }
    missionTile = () => {
        axios.get('http://localhost:8080/missions')
        .then((response) => {
            console.log(response)
            this.setState({missions:response.data})
        })

    }
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
                        <div>
                            <div className="mission_tile_apollo">Apollo Mission</div>
                            {/* <div className="mission_tile_mission">Mission</div> */}
                            <div className="mission_tile_number">{mission.mission_number < 10 ? `0${ mission.mission_number }` : mission.mission_number}</div>
                            <div className="">{mission.mission_date}</div>
                            <div className="">{mission.mission_year}</div>
                        </div>
                        <div className="close_section" onClick={this.handleClick(-1)}></div>
                        
                        
                    </div>
                ))}
            </div>
        )
    }
}

export default Missions;