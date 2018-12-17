import React, { Component } from 'react';
import axios from 'axios';
import './apollo.scss';
import Missions from '../Missions/Missions';
import Comments from '../Comments/Comments';
import $ from 'jquery';
import AboutApollo from '../About/AboutApollo';

class Apollo extends Component {

    state = {
        user: {}
    }

    handleClick = (i) => () => {
        $('body,html').animate(
            { scrollTop: i * window.innerHeight },
            800
        );
    }

    componentDidMount() {
        const navigationButtons = $('.page_nav li');

        function updateNav() {
            const activeSection = Math.floor(window.scrollY / window.innerHeight - 0.65)
            navigationButtons.each(function () {
                console.log(activeSection, this.id[4] - 2)
                if (this.id[4] > 3 ?
                    activeSection === this.id[4] - 1
                    :
                    this.id[4] == 3 ?
                        activeSection === 1 || activeSection === 2
                        :
                        activeSection === this.id[4] - 2
                ) {
                    $(this).addClass('is_selected')

                }
                else $(this).removeClass('is_selected')

            })


        }
        $(window).on('scroll', updateNav)
        
    }

    updateUser = (user) => {
        this.setState({ user: user })
    }

    render() {
        return (


            <div>

                <ul className="page_nav">

                    <li id="nav_1" onClick={this.handleClick(0)}>
                        <span>01</span>
                    </li>
                    <li id="nav_2" onClick={this.handleClick(1)}>
                        <span>02</span>
                    </li>
                    <li id="nav_3" onClick={this.handleClick(2)}>
                        <span>03</span>
                    </li>
                    <li id="nav_4" onClick={this.handleClick(4)}>
                        <span>04</span>
                    </li>
                    <li id="nav_5" onClick={this.handleClick(5)}>
                        <span>05</span>
                    </li>
                </ul>

                <section>
                    <div className="hero_container">
                        <div className="moon"></div>
                        <div className="hero_line"></div>
                        <div className="text_image fade_in"></div>
                        <div className="sub_text_image fade_in_mission"></div>
                        <div class="scroll-down"></div>

                    </div>
                </section>
                <section className="wide_section">
                    <div className="about_apollo">
                        <AboutApollo />
                    </div>
                </section>
                <section className="tall_section">
                    <Missions />
                </section>
                <section className="">
                    <Comments user={this.state.user} updateUser={this.updateUser} />
                </section>
                <section></section>

            </div>


        )
    }
}

export default Apollo;