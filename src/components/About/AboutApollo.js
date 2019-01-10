import React, { Component } from "react";
import "./about-apollo.scss";


class AboutApollo extends Component {
  // state = {

  // }



  render() {
    return (
      <section className="about_apollo_section">
        {/* <div>Scroll Right -----> </div> */}
        {/* <div className="section_title">About <br />Project <br />Apollo</div> */}

        <div className="about_apollo_container">
          <div className="section_one">
            <div className="section_title">About Project Apollo</div>
            <div className="section_one_para">
              <p>
                The Apollo program, also known as Project Apollo, was the third
                United States human spaceflight program carried out by the
                National Aeronautics and Space Administration (NASA), which
                accomplished landing the first humans on the Moon from 1969 to
                1972. First conceived during Dwight D. Eisenhower's
                administration as a three-man spacecraft to follow the one-man
                Project Mercury which put the first Americans in space, Apollo
                was later dedicated to President John F. Kennedy's national goal
                of "landing a man on the Moon and returning him safely to the
                Earth" by the end of the 1960s, which he proposed in an address
                to Congress on May 25, 1961. It was the third US human
                spaceflight program to fly, preceded by the two-man Project
                Gemini conceived in 1961 to extend spaceflight capability in
                support of Apollo.
              </p>

              <p>
                Kennedy's goal was accomplished on the Apollo 11 mission when
                astronauts Neil Armstrong and Buzz Aldrin landed their lunar
                module (LM) on July 20, 1969, and walked on the lunar surface,
                while Michael Collins remained in lunar orbit in the command and
                service module (CSM), and all three landed safely on Earth on
                July 24. Five subsequent Apollo missions also landed astronauts
                on the Moon, the last in December 1972. In these six
                spaceflights, twelve men walked on the Moon.
              </p>

              <p>
                Apollo ran from 1961 to 1972, with the first manned flight in
                1968. It achieved its goal of manned lunar landing, despite the
                major setback of the 1967 Apollo 1 cabin fire that killed the
                entire crew during a prelaunch test. After the first landing,
                five of the remaining six missions achieved successful
                landings, but the Apollo 13 landing was prevented by an oxygen
                tank explosion in transit to the Moon, which destroyed the
                service module's capability to provide electrical power,
                crippling the CSM's propulsion and life support systems. The
                crew returned to Earth safely by using the lunar module as a
                "lifeboat" for these functions. Apollo used Saturn family
                rockets as launch vehicles.
              </p>

              <p>
                Apollo set several major human spaceflight milestones. It stands
                alone in sending manned missions beyond low Earth orbit. Apollo
                8 was the first manned spacecraft to orbit another celestial
                body, while the final Apollo 17 mission marked the sixth Moon
                landing and the ninth manned mission beyond low Earth orbit. The
                program returned 842 pounds (382 kg) of lunar rocks and soil to
                Earth, greatly contributing to the understanding of the Moon's
                composition and geological history. The program laid the
                foundation for NASA's subsequent human spaceflight capability
                and funded construction of its Johnson Space Center and Kennedy
                Space Center. Apollo also spurred advances in many areas of
                technology incidental to rocketry and manned spaceflight,
                including avionics, telecommunications, and computers.
              </p>
              {/* <p>More information on the Apollo Program can be found at Wikipedia.</p> */}
            </div>
          </div>
        </div>
        <div id="curve_arrow" />
        <div className="pull_quote">
          "That's one small step for man, one giant leap for mankind"
          <div className="quoter">—Neil Armstrong</div>
        </div>
        <div id="more_info">Scroll Right for more</div>
        <div className="about_profile_header">Lunar Mission Profile</div>
        <div className="about_seq_main_container">
          <div className="seq_container" id="seq1">
            <div className="seq_img" id="img1"></div>
            <div className="seq_text">Launch The 3 Saturn V stages burn for about 11 minutes to achieve a 100-nautical-mile (190 km) circular parking orbit. The third stage burns a small portion of its fuel to achieve orbit.</div>
          </div>
          <div className="seq_container" id="seq2">
            <div className="seq_img" id="img2"></div>
            <div className="seq_text">Translunar injection After one to two orbits to verify readiness of spacecraft systems, the S-IVB third stage reignites for about 6 minutes to send the spacecraft to the Moon.</div>
          </div>
          <div className="seq_container" id="seq3">
            <div className="seq_img" id="img3"></div>
            <div className="seq_text">Transposition and docking (1) The Spacecraft Lunar Module Adapter (SLA) panels separate to free the CSM and expose the LM. The command module pilot (CMP) moves the CSM out a safe distance, and turns 180°.</div>
          </div>
          <div className="seq_container" id="seq4">
            <div className="seq_img" id="img4"></div>
            <div className="seq_text">Transposition and docking (2), The CMP docks with the LM, and pulls the combined spacecraft away from the S-IVB, which then is sent into solar orbit. The lunar voyage takes between 2 and 3 days. Midcourse corrections are made as necessary using the SM engine.</div>
          </div>
          <div className="seq_container" id="seq5">
            <div className="seq_img" id="img5"></div>
            <div className="seq_text">Lunar orbit insertion The spacecraft passes about 60 nautical miles (110 km) behind the Moon, and the SM engine is fired to slow the spacecraft and put it into a 60-by-170-nautical-mile (110 by 310 km) orbit, which is soon circularized at 60 nautical miles by a second burn.</div>
          </div>
          <div className="seq_container" id="seq6">
            <div className="seq_img" id="img6"></div>
            <div className="seq_text">After a rest period, the commander (CDR) and lunar module pilot (LMP) move to the LM, power up its systems, and deploy the landing gear. The CSM and LM separate; the CMP visually inspects the LM, then the LM crew move a safe distance away and fire the descent engine for Descent orbit insertion, which takes it to a perilune of about 50,000 feet (15 km).</div>
          </div>
          <div className="seq_container" id="seq7">
            <div className="seq_img" id="img7"></div>
            <div className="seq_text">Powered descent At perilune, the descent engine fires again to start the descent. The CDR takes over manual control after pitchover for a vertical landing.</div>
          </div>
          <div className="seq_container" id="seq8">
            <div className="seq_img" id="img8"></div>
            <div className="seq_text">The CDR and LMP perform one or more EVAs exploring the lunar surface and collecting samples, alternating with rest periods.</div>
          </div>
          <div className="seq_container" id="seq9">
            <div className="seq_img" id="img9"></div>
            <div className="seq_text">The ascent stage lifts off, using the descent stage as a launching pad.</div>
          </div>
          <div className="seq_container" id="seq10">
            <div className="seq_img" id="img10"></div>
            <div className="seq_text">The LM rendezvouses and docks with the CSM.</div>
          </div>
          <div className="seq_container" id="seq11">
            <div className="seq_img" id="img11"></div>
            <div className="seq_text">The CDR and LMP transfer back to the CM with their material samples, then the LM ascent stage is jettisoned, to eventually fall out of orbit and crash on the surface.</div>
          </div>
          <div className="seq_container" id="seq12">
            <div className="seq_img" id="img12"></div>
            <div className="seq_text">Trans-Earth injection The SM engine fires to send the CSM back to Earth.</div>
          </div>
          <div className="seq_container" id="seq13">
            <div className="seq_img" id="img13"></div>
            <div className="seq_text">The SM is jettisoned just before reentry, and the CM turns 180° to face its blunt end forward for reentry.</div>
          </div>
          <div className="seq_container" id="seq14">
            <div className="seq_img" id="img14"></div>
            <div className="seq_text">Atmospheric drag slows the CM. Aerodynamic heating surrounds it with an envelope of ionized air which causes a communications blackout for several minutes.</div>
          </div>
          <div className="seq_container" id="seq15">
            <div className="seq_img" id="img15"></div>
            <div className="seq_text">Parachutes are deployed, slowing the CM for a splashdown in the Pacific Ocean. The astronauts are recovered and brought to an aircraft carrier.</div>
          </div>
          

        </div>
        {/* <div className="test_sections" id="img1"></div> */}
      </section>
    );
  }
}

export default AboutApollo;
