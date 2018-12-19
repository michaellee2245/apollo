import React, { Component } from 'react';
import './about-apollo.scss';

class AboutApollo extends Component {

    state = {

    }

    render() {
        return (
            <section className="about_apollo_section">
                {/* <div>Scroll Right -----> </div> */}
                {/* <div className="section_title">About <br />Project <br />Apollo</div> */}

                <div className="about_apollo_container">
                    <div className="section_one">
                        <div className="section_title">About Project Apollo</div>
                        <div className="section_one-para">

                            <p>The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which accomplished landing the first humans on the Moon from 1969 to 1972. First conceived during Dwight D. Eisenhower's administration as a three-man spacecraft to follow the one-man Project Mercury which put the first Americans in space, Apollo was later dedicated to President John F. Kennedy's national goal of "landing a man on the Moon and returning him safely to the Earth" by the end of the 1960s, which he proposed in an address to Congress on May 25, 1961. It was the third US human spaceflight program to fly, preceded by the two-man Project Gemini conceived in 1961 to extend spaceflight capability in support of Apollo.</p>

                            <p>Kennedy's goal was accomplished on the Apollo 11 mission when astronauts Neil Armstrong and Buzz Aldrin landed their lunar module (LM) on July 20, 1969, and walked on the lunar surface, while Michael Collins remained in lunar orbit in the command and service module (CSM), and all three landed safely on Earth on July 24. Five subsequent Apollo missions also landed astronauts on the Moon, the last in December 1972. In these six spaceflights, twelve men walked on the Moon.</p>


                            <p>Apollo ran from 1961 to 1972, with the first manned flight in 1968. It achieved its goal of manned lunar landing, despite the major setback of a 1967 Apollo 1 cabin fire that killed the entire crew during a prelaunch test. After the first landing, sufficient flight hardware remained for nine follow-on landings with a plan for extended lunar geological and astrophysical exploration. Budget cuts forced the cancellation of three of these. Five of the remaining six missions achieved successful landings, but the Apollo 13 landing was prevented by an oxygen tank explosion in transit to the Moon, which destroyed the service module's capability to provide electrical power, crippling the CSM's propulsion and life support systems. The crew returned to Earth safely by using the lunar module as a "lifeboat" for these functions. Apollo used Saturn family rockets as launch vehicles, which were also used for an Apollo Applications Program, which consisted of Skylab, a space station that supported three manned missions in 1973–74, and the Apollo–Soyuz Test Project, a joint US-Soviet Union Earth-orbit mission in 1975.</p>

                            <p>Apollo set several major human spaceflight milestones. It stands alone in sending manned missions beyond low Earth orbit. Apollo 8 was the first manned spacecraft to orbit another celestial body, while the final Apollo 17 mission marked the sixth Moon landing and the ninth manned mission beyond low Earth orbit. The program returned 842 pounds (382 kg) of lunar rocks and soil to Earth, greatly contributing to the understanding of the Moon's composition and geological history. The program laid the foundation for NASA's subsequent human spaceflight capability and funded construction of its Johnson Space Center and Kennedy Space Center. Apollo also spurred advances in many areas of technology incidental to rocketry and manned spaceflight, including avionics, telecommunications, and computers.</p>
                        </div>
                    </div>


                </div>
                <div className="pull_quote">
                    "That's one small step for man, one giant leap for mankind"
                    <div className="quoter">—Neil Armstrong</div>
                </div>
                <div className="test_sections" id="img1"></div>
            </section>
        )
    }
}

export default AboutApollo;