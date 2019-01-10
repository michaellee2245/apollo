import React, { Component } from 'react';
// import axios from 'axios';
import './missions.css';

import ApolloMissionTiles from '../ApolloMissionTiles/ApolloMissionTiles';
class Missions extends Component {

    // state = {
    //     selectedMission: -1,
    //     missions: [],
    //     missionTileOpen: false,
    // }

    // handleClick = i => e => {
    //     e.stopPropagation()
    //     console.log(i)
    //     this.setState({ selectedMission: i })
    // }
    // handleClose = () => {
    //     this.setState
    // }
    // componentDidMount() {
    //     this.missionTile();
    // }
    // missionTile = () => {
    //     axios.get('http://localhost:8080/api/missions')
    //         .then((response) => {
    //             console.log(response)
    //             this.setState({ missions: response.data })
    //         })

    // }
    // handleMissionTileClick = () => {
    //     this.setState({ missionTileOpen: true })
    // }

    render() {
        return (
            <div className="missions">
                {/* <div className="mission_tile" >
                    <div className={`selected_mission ${this.missionTileOpen ? "" : "hidden"}`} onClick={() => this.handleMissionTileClick()} ></div>
                    <div>Some information</div>
                </div> */}
                <div className="mission_section_title">Explore each mission</div>
                <ApolloMissionTiles />



            </div >


        )
    }
}

export default Missions;