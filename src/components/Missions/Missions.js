import React, { Component } from 'react';
import axios from 'axios';
import './missions.scss';
import { ReactComponent as RocketIcon } from '../../assets/rocket-with-a-circle.svg';
class Missions extends Component {

    state = {
        selectedMission: -1,
        missions: [],
        missionTileOpen: false,
    }

    handleClick = i => e => {
        e.stopPropagation()
        console.log(i)
        this.setState({ selectedMission: i })
    }
    // handleClose = () => {
    //     this.setState
    // }
    componentDidMount() {
        this.missionTile();
    }
    missionTile = () => {
        axios.get('http://localhost:8080/api/missions')
            .then((response) => {
                console.log(response)
                this.setState({ missions: response.data })
            })

    }
    handleMissionTileClick = () => {
        this.setState({ missionTileOpen: true })
    }
    expandingDiv = () => {
        //Setup
        var fsmActual = document.createElement('div');
        fsmActual.setAttribute('id', 'fsm_actual');
        document.body.appendChild(fsmActual);
        var $fsm = document.querySelectorAll('.fsm');;
        var $fsmActual = document.querySelector('#fsm_actual');
        $fsmActual.style.position = "absolute";

        var position = {};
        var size = {};


        //modal action stuffs
        var openFSM = function (event) {
            var $this = event.currentTarget;
            position = $this.getBoundingClientRect();
            size = {
                width: window.getComputedStyle($this).width,
                height: window.getComputedStyle($this).height
            }

            $fsmActual.style.position = "absolute";
            $fsmActual.style.top = position.top + 'px';
            $fsmActual.style.left = position.left + 'px';
            $fsmActual.style.height = size.height;
            $fsmActual.style.width = size.width;
            $fsmActual.style.margin = $this.style.margin;

            setTimeout(function () {
                $fsmActual.innerHTML = $this.innerHTML;
                var classes = $this.classList.value.split(' ');
                for (var i = 0; i < classes.length; i++) {
                    $fsmActual.classList.add(classes[i]);
                }
                $fsmActual.classList.add('growing');
                $fsmActual.style.height = '200vh';
                $fsmActual.style.width = '100vw';
                $fsmActual.style.top = '200%';
                $fsmActual.style.left = '0';
                $fsmActual.style.margin = '0';
            }, 1);

            setTimeout(function () {
                $fsmActual.classList.remove('growing');
                $fsmActual.classList.add('full-screen')
            }, 500);
        };

        var closeFSM = function (event) {
            var $this = event.currentTarget;

            $this.style.height = size.height;
            $this.style.width = size.width;
            $this.style.top = position.top + 'px';
            $this.style.left = position.left + 'px';
            $this.style.margin = '0';
            $this.classList.remove('full-screen');
            $this.classList.add('shrinking');

            setTimeout(function () {
                while ($this.firstChild) $this.removeChild($this.firstChild);
                var classList = $this.classList;
                while (classList.length > 0) {
                    classList.remove(classList.item(0));
                }
                $this.style = '';;
            }, 500);
        };

        for (var i = 0; i < $fsm.length; i++) {
            $fsm[i].addEventListener("click", openFSM);
        }
        $fsmActual.addEventListener("click", closeFSM);
    }
    render() {
        return (
            <div className="missions">
                {/* <div className="mission_tile" >
                    <div className={`selected_mission ${this.missionTileOpen ? "" : "hidden"}`} onClick={() => this.handleMissionTileClick()} ></div>
                    <div>Some information</div>
                </div> */}
                <div id="fsm_container" className="fsm-container" onClick={() => this.expandingDiv()}>
                    <div className="fsm apple">
                        {/* <div className="fa fa-apple">
                            <div>Apollo Mission</div>
                            <div>01</div>
                            <div>01.27.1967</div>
                        </div> */}
                        <div className="modal-content">
                            <div className="apollo_1">
                                <div className="mission_titles">
                                    <div>Apollo 01 | 01.27.1967</div>
                                    
                                    <div>01.27.1967</div>
                                </div>
                                <p>
                                Apollo 1, initially designated AS-204, was the first manned mission of the United States Apollo program, the program to land the first men on the Moon. Planned as the first low Earth orbital test of the Apollo command and service module with a crew, to launch on February 21, 1967, the mission never flew; a cabin fire during a launch rehearsal test at Cape Kennedy Air Force Station Launch Complex 34 on January 27 killed all three crew members—Command Pilot Virgil I. "Gus" Grissom, Senior Pilot Ed White, and Pilot Roger B. Chaffee—and destroyed the command module (CM). The name Apollo 1, chosen by the crew, was officially retired by NASA in commemoration of them on April 24, 1967.
                                
                                Immediately after the fire, NASA convened the Apollo 204 Accident Review Board to determine the cause of the fire, and both houses of the United States Congress conducted their own committee inquiries to oversee NASA's investigation. The ignition source of the fire was determined to be electrical, and the fire spread rapidly due to combustible nylon material, and the high pressure, pure oxygen cabin atmosphere. The astronauts' rescue was prevented by the plug door hatch, which could not be opened against the higher internal pressure of the cabin. Because the rocket was unfueled, the test was not considered hazardous, and emergency preparedness for the test was poor.
                                
                                During the Congressional investigation, Senator Walter Mondale publicly revealed a NASA internal document citing problems with prime Apollo contractor North American Aviation, which became known as the "Phillips Report". This disclosure embarrassed NASA Administrator James E. Webb, who was unaware of the document's existence, and attracted controversy to the Apollo program. Despite congressional displeasure at NASA's lack of openness, both congressional committees ruled that the issues raised in the report had no bearing on the accident.
                                
                                Manned Apollo flights were suspended for 20 months while the command module's hazards were addressed. However, the development and unmanned testing of the lunar module (LM) and Saturn V Moon rocket continued. The Saturn IB launch vehicle for Apollo 1, AS-204, was used for the first LM test flight, Apollo 5. The first successful manned Apollo mission was flown by Apollo 1's backup crew on Apollo 7 in October 1968.
                                </p>
                                <h2>Crew</h2>
                                <div>
                                    <div className="crew_list">
                                        <ul>
                                            <li>Command Pilot</li>
                                            <li>Senior Pilot</li>
                                            <li>Pilot</li>
                                        </ul>
                                        <div className="crew_line"></div>
                                        <ul>
                                            <li>Virgil I. "Gus" Grissom</li>
                                            <li>Edward H. White II</li>
                                            <li>Roger B. Chaffee</li>
                                        </ul>
                                    </div>
                                </div>
                                <h2>Mission Background</h2>
                                <div>
                                    <p>
                                        Grissom declared his intent to keep his craft in orbit for a full 14 days. A newspaper article published on August 4, 1966, referred to the flight as "Apollo 1". CM-012 arrived at the Kennedy Space Center on August 26, labeled Apollo One by NAA on its packaging. In October 1966, NASA announced the flight would carry a small television camera to broadcast live from the command module. The camera would also be used to allow flight controllers to monitor the spacecraft's instrument panel in flight. Television cameras were carried aboard all manned Apollo missions.
                                </p>
                                    <h3>Subtitle</h3>
                                    <p>
                                        Grissom declared his intent to keep his craft in orbit for a full 14 days. A newspaper article published on August 4, 1966, referred to the flight as "Apollo 1". CM-012 arrived at the Kennedy Space Center on August 26, labeled Apollo One by NAA on its packaging. In October 1966, NASA announced the flight would carry a small television camera to broadcast live from the command module. The camera would also be used to allow flight controllers to monitor the spacecraft's instrument panel in flight. Television cameras were carried aboard all manned Apollo missions.
                                </p>
                                    <h3>Subtitle</h3>
                                    <p>
                                        Grissom declared his intent to keep his craft in orbit for a full 14 days. A newspaper article published on August 4, 1966, referred to the flight as "Apollo 1". CM-012 arrived at the Kennedy Space Center on August 26, labeled Apollo One by NAA on its packaging. In October 1966, NASA announced the flight would carry a small television camera to broadcast live from the command module. The camera would also be used to allow flight controllers to monitor the spacecraft's instrument panel in flight. Television cameras were carried aboard all manned Apollo missions.
                                </p>
                                    <h3>Subtitle</h3>
                                    <p>
                                        Grissom declared his intent to keep his craft in orbit for a full 14 days. A newspaper article published on August 4, 1966, referred to the flight as "Apollo 1". CM-012 arrived at the Kennedy Space Center on August 26, labeled Apollo One by NAA on its packaging. In October 1966, NASA announced the flight would carry a small television camera to broadcast live from the command module. The camera would also be used to allow flight controllers to monitor the spacecraft's instrument panel in flight. Television cameras were carried aboard all manned Apollo missions.
                                </p>

                                </div>
                                <h2>Accident</h2>
                                <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                                <h2>Title 4</h2>
                                <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="fsm_container" className="fsm-container" onClick={() => this.expandingDiv()}>
                    <div className="fsm apple">
                        <i className="fa fa-apple"></i>
                        <div className="modal-content">
                            <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                        </div>
                    </div>
                </div>
                <div id="fsm_container" className="fsm-container" onClick={() => this.expandingDiv()}>
                    <div className="fsm apple">
                        <i className="fa fa-apple"></i>
                        <div className="modal-content">
                            <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                        </div>
                    </div>
                </div>
                <div id="fsm_container" className="fsm-container" onClick={() => this.expandingDiv()}>
                    <div className="fsm apple">
                        <i className="fa fa-apple"></i>
                        <div className="modal-content">
                            <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                        </div>
                    </div>
                </div>
                <div id="fsm_container" className="fsm-container" onClick={() => this.expandingDiv()}>
                    <div className="fsm apple">
                        <i className="fa fa-apple"></i>
                        <div className="modal-content">
                            <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                        </div>
                    </div>
                </div>
                <div id="fsm_container" className="fsm-container" onClick={() => this.expandingDiv()}>
                    <div className="fsm apple">
                        <i className="fa fa-apple"></i>
                        <div className="modal-content">
                            <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                        </div>
                    </div>
                </div>
                <div id="fsm_container" className="fsm-container" onClick={() => this.expandingDiv()}>
                    <div className="fsm apple">
                        <i className="fa fa-apple"></i>
                        <div className="modal-content">
                            <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                        </div>
                    </div>
                </div>
                <div id="fsm_container" className="fsm-container" onClick={() => this.expandingDiv()}>
                    <div className="fsm apple">
                        <i className="fa fa-apple"></i>
                        <div className="modal-content">
                            <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                        </div>
                    </div>
                </div>
                <div id="fsm_container" className="fsm-container" onClick={() => this.expandingDiv()}>
                    <div className="fsm apple">
                        <i className="fa fa-apple"></i>
                        <div className="modal-content">
                            <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                        </div>
                    </div>
                </div>
                <div id="fsm_container" className="fsm-container" onClick={() => this.expandingDiv()}>
                    <div className="fsm apple">
                        <i className="fa fa-apple"></i>
                        <div className="modal-content">
                            <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                        </div>
                    </div>
                </div>
                <div id="fsm_container" className="fsm-container" onClick={() => this.expandingDiv()}>
                    <div className="fsm apple">
                        <i className="fa fa-apple"></i>
                        <div className="modal-content">
                            <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                        </div>
                    </div>
                </div>
                <div id="fsm_container" className="fsm-container" onClick={() => this.expandingDiv()}>
                    <div className="fsm apple">
                        <i className="fa fa-apple"></i>
                        <div className="modal-content">
                            <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                        </div>
                    </div>
                </div>



            </div >


        )
    }
}

export default Missions;