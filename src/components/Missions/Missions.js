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
        axios.get('http://localhost:8080/missions')
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
            }, 1000);
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
            }, 1000);
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
                <div id="fsm_container" class="fsm-container" onClick={() => this.expandingDiv()}>
                    <div class="fsm apple">
                        <div class="fa fa-apple">
                            <div>Apollo Mission</div>
                            <div>01</div>
                            <div>Something Else</div>
                        </div>
                        <div class="modal-content">
                            <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                        </div>
                    </div>
                </div>
                <div id="fsm_container" class="fsm-container" onClick={() => this.expandingDiv()}>
                    <div class="fsm apple">
                        <i class="fa fa-apple"></i>
                        <div class="modal-content">
                            <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                        </div>
                    </div>
                </div>
                <div id="fsm_container" class="fsm-container" onClick={() => this.expandingDiv()}>
                    <div class="fsm apple">
                        <i class="fa fa-apple"></i>
                        <div class="modal-content">
                            <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                        </div>
                    </div>
                </div>
                <div id="fsm_container" class="fsm-container" onClick={() => this.expandingDiv()}>
                    <div class="fsm apple">
                        <i class="fa fa-apple"></i>
                        <div class="modal-content">
                            <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                        </div>
                    </div>
                </div>
                <div id="fsm_container" class="fsm-container" onClick={() => this.expandingDiv()}>
                    <div class="fsm apple">
                        <i class="fa fa-apple"></i>
                        <div class="modal-content">
                            <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                        </div>
                    </div>
                </div>
                <div id="fsm_container" class="fsm-container" onClick={() => this.expandingDiv()}>
                    <div class="fsm apple">
                        <i class="fa fa-apple"></i>
                        <div class="modal-content">
                            <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                        </div>
                    </div>
                </div>
                <div id="fsm_container" class="fsm-container" onClick={() => this.expandingDiv()}>
                    <div class="fsm apple">
                        <i class="fa fa-apple"></i>
                        <div class="modal-content">
                            <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                        </div>
                    </div>
                </div>
                <div id="fsm_container" class="fsm-container" onClick={() => this.expandingDiv()}>
                    <div class="fsm apple">
                        <i class="fa fa-apple"></i>
                        <div class="modal-content">
                            <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                        </div>
                    </div>
                </div>
                <div id="fsm_container" class="fsm-container" onClick={() => this.expandingDiv()}>
                    <div class="fsm apple">
                        <i class="fa fa-apple"></i>
                        <div class="modal-content">
                            <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                        </div>
                    </div>
                </div>
                <div id="fsm_container" class="fsm-container" onClick={() => this.expandingDiv()}>
                    <div class="fsm apple">
                        <i class="fa fa-apple"></i>
                        <div class="modal-content">
                            <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                        </div>
                    </div>
                </div>
                <div id="fsm_container" class="fsm-container" onClick={() => this.expandingDiv()}>
                    <div class="fsm apple">
                        <i class="fa fa-apple"></i>
                        <div class="modal-content">
                            <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                        </div>
                    </div>
                </div>
                <div id="fsm_container" class="fsm-container" onClick={() => this.expandingDiv()}>
                    <div class="fsm apple">
                        <i class="fa fa-apple"></i>
                        <div class="modal-content">
                            <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>
                        </div>
                    </div>
                </div>



            </div >


        )
    }
}

export default Missions;