import React, { Component } from "react";
import "./apollo-mission-tiles.scss";

class ApolloMissionTiles extends Component {
    render() {
        return (
            <div id="mosaic_container" className="mission_wrapper">
                <a href="#mission01">
                    <button className="modal_button">
                        <div className="accent_line"></div>
                        <div className="mission_title_small">Apollo 01</div>
                        <div className="mission_tile_container">
                            <div className="mission_title">Apollo 01</div>
                            <div className="tile_line"></div>
                            <div className="date_title">Mission Date</div>
                            <div className="mission_tile_info">
                                <span className="mission_month">01.27 </span>
                                <span> 1967</span>
                            </div>
                        </div>
                    </button>
                </a>

                <div id="mission01" class="modalDialog">
                    <div>
                        <a href="#close" title="Close">
                            <div className="close" />
                        </a>

                        <div className="story_container">
                            <div className="modal_mission">Mission</div>
                            <div className="modal_num">01</div>

                            <div className="crew_container">
                                <div className="crew_members">Crew Members</div>
                                <div className="crew_table">
                                    <div>
                                        <h4>Position</h4>
                                        <div>Command Pilot</div>
                                        <div>Senior Pilot</div>
                                        <div>Pilot</div>
                                    </div>
                                    <div>
                                        <h4>Astronaut</h4>
                                        <div>Virgil I. "Gus" Grissom</div>
                                        <div>Edward H. White II</div>
                                        <div>Roger B. Chaffee</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mission_overview">
                                <h2>Basic Overview</h2>
                                Apollo 1, initially designated AS-204, was the first manned mission of the United States Apollo program, the program to land the first men on the Moon. Planned as the first low Earth orbital test of the Apollo command and service module with a crew, to launch on February 21, 1967, the mission never flew; a cabin fire during a launch rehearsal test at Cape Kennedy Air Force Station Launch Complex 34 on January 27 killed all three crew members—Command Pilot Virgil I. "Gus" Grissom, Senior Pilot Ed White, and Pilot Roger B. Chaffee—and destroyed the command module (CM). The name Apollo 1, chosen by the crew, was officially retired by NASA in commemoration of them on April 24, 1967.
                            </div>
                            <div className="modal_accent_line"></div>
                            <div className="story_info_container">


                                <div className="background_section">
                                    <h4>Mission Background</h4>
                                    <p>
                                        Grissom declared his intent to keep his craft in orbit for a full 14 days. A newspaper article published on August 4, 1966, referred to the flight as "Apollo 1". CM-012 arrived at the Kennedy Space Center on August 26, labeled Apollo One by NAA on its packaging. In October 1966, NASA announced the flight would carry a small television camera to broadcast live from the command module. The camera would also be used to allow flight controllers to monitor the spacecraft's instrument panel in flight. Television cameras were carried aboard all manned Apollo missions.
                                </p>
                                    <h5>Spacecraft Preparation</h5>
                                    <p>
                                        The Apollo command and service module was much bigger and far more complex than any previously implemented spacecraft design. In October 1963, Joseph F. Shea was named Apollo Spacecraft Program Office (ASPO) manager, responsible for managing the design and construction of both the CSM and the LM. In a spacecraft review meeting held with Shea on August 19, 1966 (a week before delivery), the crew expressed concern about the amount of flammable material (mainly nylon netting and Velcro) in the cabin, which both astronauts and technicians found convenient for holding tools and equipment in place. Although Shea gave the spacecraft a passing grade, after the meeting they gave him a crew portrait they had posed with heads bowed and hands clasped in prayer, with the inscription: <h6>"It isn't that we don't trust you, Joe, but this time we've decided to go over your head."</h6> Shea gave his staff orders to tell North American to remove the flammables from the cabin, but did not supervise the issue personally.
                                </p>
                                </div>
                                <div className="additional_section">
                                    <h4>Accident</h4>
                                    {/* <h5>Plugs Out Test</h5> */}
                                    <p>The launch simulation on January 27, 1967, on pad 34, was a "plugs-out" test to determine whether the spacecraft would operate nominally on (simulated) internal power while detached from all cables and umbilicals. Passing this test was essential to making the February 21 launch date. The test was considered non-hazardous because neither the launch vehicle nor the spacecraft was loaded with fuel or cryogenics, and all pyrotechnic systems (explosive bolts) were disabled.
                                </p>
                                    <p>Movement by the astronauts was detected by the spacecraft's inertial measurement unit and the astronaut's biomedical sensors, and also indicated by increases in oxygen spacesuit flow, and sounds from Grissom's stuck-open microphone. There was no evidence to identify the movement, or whether it was related to the fire. The stuck microphone was part of a problem with the communications loop connecting the crew, the Operations and Checkout Building, and the Complex 34 blockhouse control room. The poor communications led Grissom to remark: "How are we going to get to the Moon if we can't talk between two or three buildings?"
                                </p>
                                    {/* <h5>Fire</h5> */}
                                    <p>
                                        The crew members were using the time to run through their checklist again, when a momentary increase in AC Bus 2 voltage occurred. Nine seconds later, one of the astronauts (some listeners and laboratory analysis indicate Grissom) exclaimed "Hey!", "Fire!", or "Flame!"; this was followed by two seconds of scuffling sounds through Grissom's open microphone. This was immediately followed at by someone (believed by most listeners, and supported by laboratory analysis, to be Chaffee) saying, "[I've, or We've] got a fire in the cockpit." After 6.8 seconds of silence, a second, badly garbled transmission occurred, interpreted by various listeners as:
                                            <h6>
                                            "They're fighting a bad fire—Let's get out ....Open 'er up"
                                            "We've got a bad fire—Let's get out ....We're burning up", or
                                            "I'm reporting a bad fire ....I'm getting out ....".
                                            This transmission lasted 5.0 seconds and ended with a cry of pain.
                                             </h6></p>

                                    <p>
                                        It took five minutes for the pad workers to open all three hatch layers, and they could not drop the inner hatch to the cabin floor as intended, so they pushed it out of the way to one side. Although the cabin lights remained lit, they were at first unable to find the astronauts through the dense smoke. As the smoke cleared, they found the bodies, but were not able to remove them. The fire had partly melted Grissom's and White's nylon space suits and the hoses connecting them to the life support system. Grissom had removed his restraints and was lying on the floor of the spacecraft. White's restraints were burned through, and he was found lying sideways just below the hatch. It was determined that he had tried to open the hatch per the emergency procedure, but was not able to do so against the internal pressure. Chaffee was found strapped into his right-hand seat, as procedure called for him to maintain communication until White opened the hatch. Because of the large strands of melted nylon fusing the astronauts to the cabin interior, removing the bodies took nearly 90 minutes.
                                </p>
                                </div>

                                <div className="last_section">
                                    <h4>Memorials</h4>
                                    Gus Grissom and Roger Chaffee were buried at Arlington National Cemetery. Ed White was buried at West Point Cemetery on the grounds of the United States Military Academy in West Point, New York. Their names are among those of several astronauts and cosmonauts who have died in the line of duty, listed on the Space Mirror Memorial at the Kennedy Space Center Visitor Complex in Merritt Island, Florida. President Jimmy Carter awarded the Congressional Space Medal of Honor posthumously to Grissom on October 1, 1978. President Bill Clinton awarded it to White and Chaffee on December 17, 1997.

                                    An Apollo 1 mission patch was left on the Moon's surface after the first manned lunar landing by Apollo 11 crew members Neil Armstrong and Buzz Aldrin. The Apollo 15 mission left on the surface of the Moon a tiny memorial statue, Fallen Astronaut, along with a plaque containing the names of the Apollo 1 astronauts, among others including Soviet cosmonauts, who perished in the pursuit of human space flight.
                                </div>

                            </div>
                            <div className="gus_quote">
                                <p>"You sort of have to put that out of your mind. There's always a possibility that you can have a catastrophic failure, of course; this can happen on any flight; it can happen on the last one as well as the first one. So, you just plan as best you can to take care of all these eventualities, and you get a well-trained crew and you go fly."
                                </p>
                                <div>—Gus Grissom</div>
                            </div>
                        </div>

                    </div>
                </div>

                <a href="#mission07">
                    <button className="modal_button">
                        <div className="accent_line"></div>
                        <div className="mission_title_small">Apollo 07</div>
                        <div className="mission_tile_container">
                            <div className="mission_title">Apollo 07</div>
                            <div className="tile_line2"></div>
                            <div className="date_title">Mission Date</div>
                            <div className="mission_tile_info">
                                <span className="mission_month">10.11&ndash;10.22 </span>
                                <span> 1968</span>
                            </div>
                        </div>
                    </button>
                </a>

                <div id="mission07" class="modalDialog">
                    <div>
                    <a href="#close" title="Close">
                            <div className="close" />
                        </a>
                        <div className="story_container">
                            <div className="modal_mission">Mission</div>
                            <div className="modal_num">07</div>

                            <div className="crew_container">
                                <div className="crew_members">Crew Members</div>
                                <div className="crew_table">
                                    <div>
                                        <h4>Position</h4>
                                        <div>Commander</div>
                                        <div>Command Module Pilot</div>
                                        <div>Lunar Module Pilot</div>
                                    </div>
                                    <div>
                                        <h4>Astronaut</h4>
                                        <div>Walter M. Schirra</div>
                                        <div>Donn F. Eisele</div>
                                        <div>R. Walter Cunningham</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mission_overview">
                                <h2>Basic Overview</h2>
                                Apollo 7 was an October 1968 human spaceflight mission carried out by the United States. It was the first mission in the United States' Apollo program to carry a crew into space. It was also the first U.S. spaceflight to carry astronauts since the flight of Gemini XII in November 1966. The AS-204 mission, also known as "Apollo 1", was intended to be the first manned flight of the Apollo program. It was scheduled to launch in February 1967, but a fire in the cabin during a January 1967 test killed the crew. Manned flights were then suspended for 21 months, while the cause of the accident was investigated and improvements made to the spacecraft and safety procedures, and unmanned test flights of the Saturn V rocket and Apollo Lunar Module were made. Apollo 7 fulfilled Apollo 1's mission of testing the Apollo command and service module (CSM) in low Earth orbit.
                            </div>
                            <div className="modal_accent_line"></div>
                            <div className="story_info_container">


                                <div className="background_section">
                                    <h4>Mission Background</h4>
                                    <p>
                                    Schirra, Eisele, and Cunningham were first named as an Apollo crew on September 29, 1966. They were to fly a second Earth orbital test of the original Block I command and service module (not designed to dock with the lunar module for lunar flight) after Apollo 1, the first manned flight, to be made by Virgil "Gus" Grissom, Ed White, and Roger Chaffee. In December 1966, the second mission was deemed redundant and canceled, and Schirra's crew were reassigned as Grissom's backup.
                                    Plans for the first manned Apollo flights were completely disrupted by the January 27, 1967 cabin fire which killed Grissom, White, and Chaffee. Schirra, Eisele, and Cunningham were later named as prime crew for the first manned flight, which would now use the Block II spacecraft designed for the lunar missions. The command module (CM) and astronauts' spacesuits had been extensively redesigned, to reduce and eliminate the chance of a repeat of the accident which killed the first crew. Schirra thus became the only astronaut to fly Mercury, Gemini and Apollo missions. His crew would test the life support, propulsion, guidance and control systems during this "open-ended" mission (meaning it would be extended as it passed each test). The duration was limited to 11 days, reduced from the original 14-day limit for Apollo 1.
                                </p><div className="last_section">
                                    <h4>Crew Honors</h4>
                                    After the mission, NASA awarded Schirra, Eisele, and Cunningham its Exceptional Service Medal in recognition of their success. On November 2, 1968, President Lyndon Johnson held a ceremony at the LBJ Ranch in Johnson City, Texas, to present the astronauts with the medals. He also presented NASA's highest honor, the Distinguished Service Medal, to recently retired NASA administrator James E. Webb, for his "outstanding leadership of America's space program" since the beginning of Apollo.
                                </div>
                                </div>
                                
                                <div className="extra_width">
                                    <h4>Mission Highlights</h4>
                                    <h5 className="reduce_leading">On-orbit operations</h5>
                                    <p>The Apollo hardware and all mission operations worked without any significant problems, and the service propulsion system (SPS), the all-important engine that would place Apollo into and out of lunar orbit, made eight firings, performing within 1% of the engine acceptance test thrust and specific impulse values. As the Saturn IB itself had performed very smoothly during launch, the astronauts were unprepared for the sudden violent jolt they received upon first activating the SPS, leading to Schirra yelling "Yabbadabbadoo!" in reference to The Flintstones cartoon. Don Eisele called it "a real boot in the rear."
                                </p>
                                    <p>Apollo promised the best food preparation yet seen on a manned spacecraft. For the first time, astronauts had both hot and cold water to prepare meals with (the food came in freeze-dried vacuum packs that would be injected with water or else eaten dry followed by a sip of water) and Wally Schirra, who had had only toothpaste-like tubes for food on his Mercury flight, described the food as "Still does not match home cooking, but it comes a lot closer than space food used to." Thirty-three meals were provided for the three crewmen, allowing them three meals a day for each of the 11 days in space. Even so, the astronauts complained that there was more food than they could eat and that most of it was too sweet, although the menus had been prepared based on their personal preferences.
                                </p>
                                <h5 className="reduce_leading">"Mutiny" in Space</h5>
                                <p>Even though Apollo's larger cabin was more comfortable than Gemini's, 11 days in orbit took its toll on the astronauts. Tension with Schirra began with the launch decision, when flight managers decided to launch with a less-than-ideal abort option for the early part of the ascent. Once in orbit, the spacious cabin may have induced some crew motion sickness, which had not been an issue in the earlier, smaller spacecraft. The crew were unhappy with their food selections, especially the high energy sweets. They also found the waste collection system cumbersome (requiring 30 minutes to use) and smelly. But the worst problem occurred when Schirra developed a severe head cold. As a result, he became irritable with requests from Mission Control and all three astronauts began "talking back" to the CAPCOM.</p>

                                    <h5 className="reduce_leading">Reentry and post-flight evaluation</h5>
                                    <p>The splashdown point was 27°32′N 64°04′W, 200 nautical miles (370 km) SSW of Bermuda and 7 nmi (13 km) north of the recovery ship USS Essex. 
                                        
                                    Despite the difficulties between the crew and Mission Control, the mission successfully met its objectives to verify the Apollo command and service module's flight worthiness, allowing Apollo 8's flight to the Moon to proceed just two months later. Apollo 7 was Project Apollo's only human spaceflight mission to launch from Cape Kennedy Air Force Station's Launch Complex 34. All subsequent Apollo and Skylab spacecraft flights (including Apollo–Soyuz) were launched from Launch Complex 39 at the nearby Kennedy Space Center. Launch Complex 34 was declared redundant and decommissioned in 1969, making Apollo 7 the last human spaceflight mission to launch from the Cape Air Force Station in the 20th century. As of December 2018, Cunningham is the only surviving member of the crew. Eisele died in 1987 and Schirra in 2007.
                                </p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <a href="#mission08">
                    <button className="modal_button">
                        <div className="accent_line"></div>
                        <div className="mission_title_small">Apollo 08</div>
                        <div className="mission_tile_container">
                            <div className="mission_title">Apollo 08</div>
                            <div className="tile_line"></div>
                            <div className="date_title">Mission Date</div>
                            <div className="mission_tile_info">
                                <span className="mission_month">12.21&ndash;12.27 </span>
                                <span> 1968</span>
                            </div>
                        </div>
                    </button>
                </a>

                <div id="mission08" class="modalDialog">
                    <div>
                        <a href="#close" title="Close">
                            <div className="close" />
                        </a>
                        <div className="story_container">
                            <div className="modal_mission">Mission</div>
                            <div className="modal_num">08</div>

                            <div className="crew_container">
                                <div className="crew_members">Crew Members</div>
                                <div className="crew_table">
                                    <div>
                                        <h4>Position</h4>
                                        <div>Command Pilot</div>
                                        <div>Senior Pilot</div>
                                        <div>Pilot</div>
                                    </div>
                                    <div>
                                        <h4>Astronaut</h4>
                                        <div>Virgil I. "Gus" Grissom</div>
                                        <div>Edward H. White II</div>
                                        <div>Roger B. Chaffee</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mission_overview">
                                <h2>Basic Overview</h2>
                                Apollo 1, initially designated AS-204, was the first manned mission of the United States Apollo program, the program to land the first men on the Moon. Planned as the first low Earth orbital test of the Apollo command and service module with a crew, to launch on February 21, 1967, the mission never flew; a cabin fire during a launch rehearsal test at Cape Kennedy Air Force Station Launch Complex 34 on January 27 killed all three crew members—Command Pilot Virgil I. "Gus" Grissom, Senior Pilot Ed White, and Pilot Roger B. Chaffee—and destroyed the command module (CM). The name Apollo 1, chosen by the crew, was officially retired by NASA in commemoration of them on April 24, 1967.
                            </div>
                            <div className="modal_accent_line"></div>
                            <div className="story_info_container">


                                <div className="background_section">
                                    <h4>Mission Background</h4>
                                    <p>
                                        Grissom declared his intent to keep his craft in orbit for a full 14 days. A newspaper article published on August 4, 1966, referred to the flight as "Apollo 1". CM-012 arrived at the Kennedy Space Center on August 26, labeled Apollo One by NAA on its packaging. In October 1966, NASA announced the flight would carry a small television camera to broadcast live from the command module. The camera would also be used to allow flight controllers to monitor the spacecraft's instrument panel in flight. Television cameras were carried aboard all manned Apollo missions.
                                </p>
                                    <h5>Spacecraft Preparation</h5>
                                    <p>
                                        The Apollo command and service module was much bigger and far more complex than any previously implemented spacecraft design. In October 1963, Joseph F. Shea was named Apollo Spacecraft Program Office (ASPO) manager, responsible for managing the design and construction of both the CSM and the LM. In a spacecraft review meeting held with Shea on August 19, 1966 (a week before delivery), the crew expressed concern about the amount of flammable material (mainly nylon netting and Velcro) in the cabin, which both astronauts and technicians found convenient for holding tools and equipment in place. Although Shea gave the spacecraft a passing grade, after the meeting they gave him a crew portrait they had posed with heads bowed and hands clasped in prayer, with the inscription: <h6>"It isn't that we don't trust you, Joe, but this time we've decided to go over your head."</h6> Shea gave his staff orders to tell North American to remove the flammables from the cabin, but did not supervise the issue personally.
                                </p>
                                </div>
                                <div className="additional_section">
                                    <h4>Accident</h4>
                                    {/* <h5>Plugs Out Test</h5> */}
                                    <p>The launch simulation on January 27, 1967, on pad 34, was a "plugs-out" test to determine whether the spacecraft would operate nominally on (simulated) internal power while detached from all cables and umbilicals. Passing this test was essential to making the February 21 launch date. The test was considered non-hazardous because neither the launch vehicle nor the spacecraft was loaded with fuel or cryogenics, and all pyrotechnic systems (explosive bolts) were disabled.
                                </p>
                                    <p>Movement by the astronauts was detected by the spacecraft's inertial measurement unit and the astronaut's biomedical sensors, and also indicated by increases in oxygen spacesuit flow, and sounds from Grissom's stuck-open microphone. There was no evidence to identify the movement, or whether it was related to the fire. The stuck microphone was part of a problem with the communications loop connecting the crew, the Operations and Checkout Building, and the Complex 34 blockhouse control room. The poor communications led Grissom to remark: "How are we going to get to the Moon if we can't talk between two or three buildings?"
                                </p>
                                    {/* <h5>Fire</h5> */}
                                    <p>
                                        The crew members were using the time to run through their checklist again, when a momentary increase in AC Bus 2 voltage occurred. Nine seconds later, one of the astronauts (some listeners and laboratory analysis indicate Grissom) exclaimed "Hey!", "Fire!", or "Flame!"; this was followed by two seconds of scuffling sounds through Grissom's open microphone. This was immediately followed at by someone (believed by most listeners, and supported by laboratory analysis, to be Chaffee) saying, "[I've, or We've] got a fire in the cockpit." After 6.8 seconds of silence, a second, badly garbled transmission occurred, interpreted by various listeners as:
                                            <h6>
                                            "They're fighting a bad fire—Let's get out ....Open 'er up"
                                            "We've got a bad fire—Let's get out ....We're burning up", or
                                            "I'm reporting a bad fire ....I'm getting out ....".
                                            This transmission lasted 5.0 seconds and ended with a cry of pain.
                                             </h6></p>

                                    <p>
                                        It took five minutes for the pad workers to open all three hatch layers, and they could not drop the inner hatch to the cabin floor as intended, so they pushed it out of the way to one side. Although the cabin lights remained lit, they were at first unable to find the astronauts through the dense smoke. As the smoke cleared, they found the bodies, but were not able to remove them. The fire had partly melted Grissom's and White's nylon space suits and the hoses connecting them to the life support system. Grissom had removed his restraints and was lying on the floor of the spacecraft. White's restraints were burned through, and he was found lying sideways just below the hatch. It was determined that he had tried to open the hatch per the emergency procedure, but was not able to do so against the internal pressure. Chaffee was found strapped into his right-hand seat, as procedure called for him to maintain communication until White opened the hatch. Because of the large strands of melted nylon fusing the astronauts to the cabin interior, removing the bodies took nearly 90 minutes.
                                </p>
                                </div>

                                <div className="last_section">
                                    <h4>Memorials</h4>
                                    Gus Grissom and Roger Chaffee were buried at Arlington National Cemetery. Ed White was buried at West Point Cemetery on the grounds of the United States Military Academy in West Point, New York. Their names are among those of several astronauts and cosmonauts who have died in the line of duty, listed on the Space Mirror Memorial at the Kennedy Space Center Visitor Complex in Merritt Island, Florida. President Jimmy Carter awarded the Congressional Space Medal of Honor posthumously to Grissom on October 1, 1978. President Bill Clinton awarded it to White and Chaffee on December 17, 1997.

                                    An Apollo 1 mission patch was left on the Moon's surface after the first manned lunar landing by Apollo 11 crew members Neil Armstrong and Buzz Aldrin. The Apollo 15 mission left on the surface of the Moon a tiny memorial statue, Fallen Astronaut, along with a plaque containing the names of the Apollo 1 astronauts, among others including Soviet cosmonauts, who perished in the pursuit of human space flight.
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <a href="#mission09">
                    <button className="modal_button">
                        <div className="accent_line"></div>
                        <div className="mission_title_small">Apollo 09</div>
                        <div className="mission_tile_container">
                            <div className="mission_title">Apollo 09</div>
                            <div className="tile_line2"></div>
                            <div className="date_title">Mission Date</div>
                            <div className="mission_tile_info">
                                <span className="mission_month">03.03&ndash;03.13 </span>
                                <span> 1969</span>
                            </div>
                        </div>
                    </button>
                </a>

                <div id="mission09" class="modalDialog">
                    <div>
                        <a href="#close" title="Close">
                            <div className="close" />
                        </a>
                        <div className="story_container">
                            <div className="modal_mission">Mission</div>
                            <div className="modal_num">09</div>

                            <div className="crew_container">
                                <div className="crew_members">Crew Members</div>
                                <div className="crew_table">
                                    <div>
                                        <h4>Position</h4>
                                        <div>Command Pilot</div>
                                        <div>Senior Pilot</div>
                                        <div>Pilot</div>
                                    </div>
                                    <div>
                                        <h4>Astronaut</h4>
                                        <div>Virgil I. "Gus" Grissom</div>
                                        <div>Edward H. White II</div>
                                        <div>Roger B. Chaffee</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mission_overview">
                                <h2>Basic Overview</h2>
                                Apollo 1, initially designated AS-204, was the first manned mission of the United States Apollo program, the program to land the first men on the Moon. Planned as the first low Earth orbital test of the Apollo command and service module with a crew, to launch on February 21, 1967, the mission never flew; a cabin fire during a launch rehearsal test at Cape Kennedy Air Force Station Launch Complex 34 on January 27 killed all three crew members—Command Pilot Virgil I. "Gus" Grissom, Senior Pilot Ed White, and Pilot Roger B. Chaffee—and destroyed the command module (CM). The name Apollo 1, chosen by the crew, was officially retired by NASA in commemoration of them on April 24, 1967.
                            </div>
                            <div className="modal_accent_line"></div>
                            <div className="story_info_container">


                                <div className="background_section">
                                    <h4>Mission Background</h4>
                                    <p>
                                        Grissom declared his intent to keep his craft in orbit for a full 14 days. A newspaper article published on August 4, 1966, referred to the flight as "Apollo 1". CM-012 arrived at the Kennedy Space Center on August 26, labeled Apollo One by NAA on its packaging. In October 1966, NASA announced the flight would carry a small television camera to broadcast live from the command module. The camera would also be used to allow flight controllers to monitor the spacecraft's instrument panel in flight. Television cameras were carried aboard all manned Apollo missions.
                                </p>
                                    <h5>Spacecraft Preparation</h5>
                                    <p>
                                        The Apollo command and service module was much bigger and far more complex than any previously implemented spacecraft design. In October 1963, Joseph F. Shea was named Apollo Spacecraft Program Office (ASPO) manager, responsible for managing the design and construction of both the CSM and the LM. In a spacecraft review meeting held with Shea on August 19, 1966 (a week before delivery), the crew expressed concern about the amount of flammable material (mainly nylon netting and Velcro) in the cabin, which both astronauts and technicians found convenient for holding tools and equipment in place. Although Shea gave the spacecraft a passing grade, after the meeting they gave him a crew portrait they had posed with heads bowed and hands clasped in prayer, with the inscription: <h6>"It isn't that we don't trust you, Joe, but this time we've decided to go over your head."</h6> Shea gave his staff orders to tell North American to remove the flammables from the cabin, but did not supervise the issue personally.
                                </p>
                                </div>
                                <div className="additional_section">
                                    <h4>Accident</h4>
                                    {/* <h5>Plugs Out Test</h5> */}
                                    <p>The launch simulation on January 27, 1967, on pad 34, was a "plugs-out" test to determine whether the spacecraft would operate nominally on (simulated) internal power while detached from all cables and umbilicals. Passing this test was essential to making the February 21 launch date. The test was considered non-hazardous because neither the launch vehicle nor the spacecraft was loaded with fuel or cryogenics, and all pyrotechnic systems (explosive bolts) were disabled.
                                </p>
                                    <p>Movement by the astronauts was detected by the spacecraft's inertial measurement unit and the astronaut's biomedical sensors, and also indicated by increases in oxygen spacesuit flow, and sounds from Grissom's stuck-open microphone. There was no evidence to identify the movement, or whether it was related to the fire. The stuck microphone was part of a problem with the communications loop connecting the crew, the Operations and Checkout Building, and the Complex 34 blockhouse control room. The poor communications led Grissom to remark: "How are we going to get to the Moon if we can't talk between two or three buildings?"
                                </p>
                                    {/* <h5>Fire</h5> */}
                                    <p>
                                        The crew members were using the time to run through their checklist again, when a momentary increase in AC Bus 2 voltage occurred. Nine seconds later, one of the astronauts (some listeners and laboratory analysis indicate Grissom) exclaimed "Hey!", "Fire!", or "Flame!"; this was followed by two seconds of scuffling sounds through Grissom's open microphone. This was immediately followed at by someone (believed by most listeners, and supported by laboratory analysis, to be Chaffee) saying, "[I've, or We've] got a fire in the cockpit." After 6.8 seconds of silence, a second, badly garbled transmission occurred, interpreted by various listeners as:
                                            <h6>
                                            "They're fighting a bad fire—Let's get out ....Open 'er up"
                                            "We've got a bad fire—Let's get out ....We're burning up", or
                                            "I'm reporting a bad fire ....I'm getting out ....".
                                            This transmission lasted 5.0 seconds and ended with a cry of pain.
                                             </h6></p>

                                    <p>
                                        It took five minutes for the pad workers to open all three hatch layers, and they could not drop the inner hatch to the cabin floor as intended, so they pushed it out of the way to one side. Although the cabin lights remained lit, they were at first unable to find the astronauts through the dense smoke. As the smoke cleared, they found the bodies, but were not able to remove them. The fire had partly melted Grissom's and White's nylon space suits and the hoses connecting them to the life support system. Grissom had removed his restraints and was lying on the floor of the spacecraft. White's restraints were burned through, and he was found lying sideways just below the hatch. It was determined that he had tried to open the hatch per the emergency procedure, but was not able to do so against the internal pressure. Chaffee was found strapped into his right-hand seat, as procedure called for him to maintain communication until White opened the hatch. Because of the large strands of melted nylon fusing the astronauts to the cabin interior, removing the bodies took nearly 90 minutes.
                                </p>
                                </div>

                                <div className="last_section">
                                    <h4>Memorials</h4>
                                    Gus Grissom and Roger Chaffee were buried at Arlington National Cemetery. Ed White was buried at West Point Cemetery on the grounds of the United States Military Academy in West Point, New York. Their names are among those of several astronauts and cosmonauts who have died in the line of duty, listed on the Space Mirror Memorial at the Kennedy Space Center Visitor Complex in Merritt Island, Florida. President Jimmy Carter awarded the Congressional Space Medal of Honor posthumously to Grissom on October 1, 1978. President Bill Clinton awarded it to White and Chaffee on December 17, 1997.

                                    An Apollo 1 mission patch was left on the Moon's surface after the first manned lunar landing by Apollo 11 crew members Neil Armstrong and Buzz Aldrin. The Apollo 15 mission left on the surface of the Moon a tiny memorial statue, Fallen Astronaut, along with a plaque containing the names of the Apollo 1 astronauts, among others including Soviet cosmonauts, who perished in the pursuit of human space flight.
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <a href="#mission10">
                    <button className="modal_button">
                        <div className="accent_line"></div>
                        <div className="mission_title_small">Apollo 10</div>
                        <div className="mission_tile_container">
                            <div className="mission_title">Apollo 10</div>
                            <div className="tile_line"></div>
                            <div className="date_title">Mission Date</div>
                            <div className="mission_tile_info">
                                <span className="mission_month">05.18&ndash;05.26 </span>
                                <span> 1969</span>
                            </div>
                        </div>
                    </button>
                </a>

                <div id="mission10" class="modalDialog">
                    <div>
                        <a href="#close" title="Close">
                            <div className="close" />
                        </a>
                        <div className="story_container">
                            <div className="modal_mission">Mission</div>
                            <div className="modal_num">10</div>

                            <div className="crew_container">
                                <div className="crew_members">Crew Members</div>
                                <div className="crew_table">
                                    <div>
                                        <h4>Position</h4>
                                        <div>Command Pilot</div>
                                        <div>Senior Pilot</div>
                                        <div>Pilot</div>
                                    </div>
                                    <div>
                                        <h4>Astronaut</h4>
                                        <div>Virgil I. "Gus" Grissom</div>
                                        <div>Edward H. White II</div>
                                        <div>Roger B. Chaffee</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mission_overview">
                                <h2>Basic Overview</h2>
                                Apollo 1, initially designated AS-204, was the first manned mission of the United States Apollo program, the program to land the first men on the Moon. Planned as the first low Earth orbital test of the Apollo command and service module with a crew, to launch on February 21, 1967, the mission never flew; a cabin fire during a launch rehearsal test at Cape Kennedy Air Force Station Launch Complex 34 on January 27 killed all three crew members—Command Pilot Virgil I. "Gus" Grissom, Senior Pilot Ed White, and Pilot Roger B. Chaffee—and destroyed the command module (CM). The name Apollo 1, chosen by the crew, was officially retired by NASA in commemoration of them on April 24, 1967.
                            </div>
                            <div className="modal_accent_line"></div>
                            <div className="story_info_container">


                                <div className="background_section">
                                    <h4>Mission Background</h4>
                                    <p>
                                        Grissom declared his intent to keep his craft in orbit for a full 14 days. A newspaper article published on August 4, 1966, referred to the flight as "Apollo 1". CM-012 arrived at the Kennedy Space Center on August 26, labeled Apollo One by NAA on its packaging. In October 1966, NASA announced the flight would carry a small television camera to broadcast live from the command module. The camera would also be used to allow flight controllers to monitor the spacecraft's instrument panel in flight. Television cameras were carried aboard all manned Apollo missions.
                                </p>
                                    <h5>Spacecraft Preparation</h5>
                                    <p>
                                        The Apollo command and service module was much bigger and far more complex than any previously implemented spacecraft design. In October 1963, Joseph F. Shea was named Apollo Spacecraft Program Office (ASPO) manager, responsible for managing the design and construction of both the CSM and the LM. In a spacecraft review meeting held with Shea on August 19, 1966 (a week before delivery), the crew expressed concern about the amount of flammable material (mainly nylon netting and Velcro) in the cabin, which both astronauts and technicians found convenient for holding tools and equipment in place. Although Shea gave the spacecraft a passing grade, after the meeting they gave him a crew portrait they had posed with heads bowed and hands clasped in prayer, with the inscription: <h6>"It isn't that we don't trust you, Joe, but this time we've decided to go over your head."</h6> Shea gave his staff orders to tell North American to remove the flammables from the cabin, but did not supervise the issue personally.
                                </p>
                                </div>
                                <div className="additional_section">
                                    <h4>Accident</h4>
                                    {/* <h5>Plugs Out Test</h5> */}
                                    <p>The launch simulation on January 27, 1967, on pad 34, was a "plugs-out" test to determine whether the spacecraft would operate nominally on (simulated) internal power while detached from all cables and umbilicals. Passing this test was essential to making the February 21 launch date. The test was considered non-hazardous because neither the launch vehicle nor the spacecraft was loaded with fuel or cryogenics, and all pyrotechnic systems (explosive bolts) were disabled.
                                </p>
                                    <p>Movement by the astronauts was detected by the spacecraft's inertial measurement unit and the astronaut's biomedical sensors, and also indicated by increases in oxygen spacesuit flow, and sounds from Grissom's stuck-open microphone. There was no evidence to identify the movement, or whether it was related to the fire. The stuck microphone was part of a problem with the communications loop connecting the crew, the Operations and Checkout Building, and the Complex 34 blockhouse control room. The poor communications led Grissom to remark: "How are we going to get to the Moon if we can't talk between two or three buildings?"
                                </p>
                                    {/* <h5>Fire</h5> */}
                                    <p>
                                        The crew members were using the time to run through their checklist again, when a momentary increase in AC Bus 2 voltage occurred. Nine seconds later, one of the astronauts (some listeners and laboratory analysis indicate Grissom) exclaimed "Hey!", "Fire!", or "Flame!"; this was followed by two seconds of scuffling sounds through Grissom's open microphone. This was immediately followed at by someone (believed by most listeners, and supported by laboratory analysis, to be Chaffee) saying, "[I've, or We've] got a fire in the cockpit." After 6.8 seconds of silence, a second, badly garbled transmission occurred, interpreted by various listeners as:
                                            <h6>
                                            "They're fighting a bad fire—Let's get out ....Open 'er up"
                                            "We've got a bad fire—Let's get out ....We're burning up", or
                                            "I'm reporting a bad fire ....I'm getting out ....".
                                            This transmission lasted 5.0 seconds and ended with a cry of pain.
                                             </h6></p>

                                    <p>
                                        It took five minutes for the pad workers to open all three hatch layers, and they could not drop the inner hatch to the cabin floor as intended, so they pushed it out of the way to one side. Although the cabin lights remained lit, they were at first unable to find the astronauts through the dense smoke. As the smoke cleared, they found the bodies, but were not able to remove them. The fire had partly melted Grissom's and White's nylon space suits and the hoses connecting them to the life support system. Grissom had removed his restraints and was lying on the floor of the spacecraft. White's restraints were burned through, and he was found lying sideways just below the hatch. It was determined that he had tried to open the hatch per the emergency procedure, but was not able to do so against the internal pressure. Chaffee was found strapped into his right-hand seat, as procedure called for him to maintain communication until White opened the hatch. Because of the large strands of melted nylon fusing the astronauts to the cabin interior, removing the bodies took nearly 90 minutes.
                                </p>
                                </div>

                                <div className="last_section">
                                    <h4>Memorials</h4>
                                    Gus Grissom and Roger Chaffee were buried at Arlington National Cemetery. Ed White was buried at West Point Cemetery on the grounds of the United States Military Academy in West Point, New York. Their names are among those of several astronauts and cosmonauts who have died in the line of duty, listed on the Space Mirror Memorial at the Kennedy Space Center Visitor Complex in Merritt Island, Florida. President Jimmy Carter awarded the Congressional Space Medal of Honor posthumously to Grissom on October 1, 1978. President Bill Clinton awarded it to White and Chaffee on December 17, 1997.

                                    An Apollo 1 mission patch was left on the Moon's surface after the first manned lunar landing by Apollo 11 crew members Neil Armstrong and Buzz Aldrin. The Apollo 15 mission left on the surface of the Moon a tiny memorial statue, Fallen Astronaut, along with a plaque containing the names of the Apollo 1 astronauts, among others including Soviet cosmonauts, who perished in the pursuit of human space flight.
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <a href="#mission11">
                    <button className="modal_button">
                        <div className="accent_line"></div>
                        <div className="mission_title_small">Apollo 11</div>
                        <div className="mission_tile_container">
                            <div className="mission_title">Apollo 11</div>
                            <div className="tile_line2"></div>
                            <div className="date_title">Mission Date</div>
                            <div className="mission_tile_info">
                                <span className="mission_month">07.16&ndash;07.24 </span>
                                <span> 1969</span>
                            </div>
                        </div>
                    </button>
                </a>

                <div id="mission11" class="modalDialog">
                    <div>
                        <a href="#close" title="Close">
                            <div className="close" />
                        </a>
                        <div className="story_container">
                            <div className="modal_mission">Mission</div>
                            <div className="modal_num">11</div>

                            <div className="crew_container">
                                <div className="crew_members">Crew Members</div>
                                <div className="crew_table">
                                    <div>
                                        <h4>Position</h4>
                                        <div>Command Pilot</div>
                                        <div>Senior Pilot</div>
                                        <div>Pilot</div>
                                    </div>
                                    <div>
                                        <h4>Astronaut</h4>
                                        <div>Virgil I. "Gus" Grissom</div>
                                        <div>Edward H. White II</div>
                                        <div>Roger B. Chaffee</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mission_overview">
                                <h2>Basic Overview</h2>
                                Apollo 1, initially designated AS-204, was the first manned mission of the United States Apollo program, the program to land the first men on the Moon. Planned as the first low Earth orbital test of the Apollo command and service module with a crew, to launch on February 21, 1967, the mission never flew; a cabin fire during a launch rehearsal test at Cape Kennedy Air Force Station Launch Complex 34 on January 27 killed all three crew members—Command Pilot Virgil I. "Gus" Grissom, Senior Pilot Ed White, and Pilot Roger B. Chaffee—and destroyed the command module (CM). The name Apollo 1, chosen by the crew, was officially retired by NASA in commemoration of them on April 24, 1967.
                            </div>
                            <div className="modal_accent_line"></div>
                            <div className="story_info_container">


                                <div className="background_section">
                                    <h4>Mission Background</h4>
                                    <p>
                                        Grissom declared his intent to keep his craft in orbit for a full 14 days. A newspaper article published on August 4, 1966, referred to the flight as "Apollo 1". CM-012 arrived at the Kennedy Space Center on August 26, labeled Apollo One by NAA on its packaging. In October 1966, NASA announced the flight would carry a small television camera to broadcast live from the command module. The camera would also be used to allow flight controllers to monitor the spacecraft's instrument panel in flight. Television cameras were carried aboard all manned Apollo missions.
                                </p>
                                    <h5>Spacecraft Preparation</h5>
                                    <p>
                                        The Apollo command and service module was much bigger and far more complex than any previously implemented spacecraft design. In October 1963, Joseph F. Shea was named Apollo Spacecraft Program Office (ASPO) manager, responsible for managing the design and construction of both the CSM and the LM. In a spacecraft review meeting held with Shea on August 19, 1966 (a week before delivery), the crew expressed concern about the amount of flammable material (mainly nylon netting and Velcro) in the cabin, which both astronauts and technicians found convenient for holding tools and equipment in place. Although Shea gave the spacecraft a passing grade, after the meeting they gave him a crew portrait they had posed with heads bowed and hands clasped in prayer, with the inscription: <h6>"It isn't that we don't trust you, Joe, but this time we've decided to go over your head."</h6> Shea gave his staff orders to tell North American to remove the flammables from the cabin, but did not supervise the issue personally.
                                </p>
                                </div>
                                <div className="additional_section">
                                    <h4>Accident</h4>
                                    {/* <h5>Plugs Out Test</h5> */}
                                    <p>The launch simulation on January 27, 1967, on pad 34, was a "plugs-out" test to determine whether the spacecraft would operate nominally on (simulated) internal power while detached from all cables and umbilicals. Passing this test was essential to making the February 21 launch date. The test was considered non-hazardous because neither the launch vehicle nor the spacecraft was loaded with fuel or cryogenics, and all pyrotechnic systems (explosive bolts) were disabled.
                                </p>
                                    <p>Movement by the astronauts was detected by the spacecraft's inertial measurement unit and the astronaut's biomedical sensors, and also indicated by increases in oxygen spacesuit flow, and sounds from Grissom's stuck-open microphone. There was no evidence to identify the movement, or whether it was related to the fire. The stuck microphone was part of a problem with the communications loop connecting the crew, the Operations and Checkout Building, and the Complex 34 blockhouse control room. The poor communications led Grissom to remark: "How are we going to get to the Moon if we can't talk between two or three buildings?"
                                </p>
                                    {/* <h5>Fire</h5> */}
                                    <p>
                                        The crew members were using the time to run through their checklist again, when a momentary increase in AC Bus 2 voltage occurred. Nine seconds later, one of the astronauts (some listeners and laboratory analysis indicate Grissom) exclaimed "Hey!", "Fire!", or "Flame!"; this was followed by two seconds of scuffling sounds through Grissom's open microphone. This was immediately followed at by someone (believed by most listeners, and supported by laboratory analysis, to be Chaffee) saying, "[I've, or We've] got a fire in the cockpit." After 6.8 seconds of silence, a second, badly garbled transmission occurred, interpreted by various listeners as:
                                            <h6>
                                            "They're fighting a bad fire—Let's get out ....Open 'er up"
                                            "We've got a bad fire—Let's get out ....We're burning up", or
                                            "I'm reporting a bad fire ....I'm getting out ....".
                                            This transmission lasted 5.0 seconds and ended with a cry of pain.
                                             </h6></p>

                                    <p>
                                        It took five minutes for the pad workers to open all three hatch layers, and they could not drop the inner hatch to the cabin floor as intended, so they pushed it out of the way to one side. Although the cabin lights remained lit, they were at first unable to find the astronauts through the dense smoke. As the smoke cleared, they found the bodies, but were not able to remove them. The fire had partly melted Grissom's and White's nylon space suits and the hoses connecting them to the life support system. Grissom had removed his restraints and was lying on the floor of the spacecraft. White's restraints were burned through, and he was found lying sideways just below the hatch. It was determined that he had tried to open the hatch per the emergency procedure, but was not able to do so against the internal pressure. Chaffee was found strapped into his right-hand seat, as procedure called for him to maintain communication until White opened the hatch. Because of the large strands of melted nylon fusing the astronauts to the cabin interior, removing the bodies took nearly 90 minutes.
                                </p>
                                </div>

                                <div className="last_section">
                                    <h4>Memorials</h4>
                                    Gus Grissom and Roger Chaffee were buried at Arlington National Cemetery. Ed White was buried at West Point Cemetery on the grounds of the United States Military Academy in West Point, New York. Their names are among those of several astronauts and cosmonauts who have died in the line of duty, listed on the Space Mirror Memorial at the Kennedy Space Center Visitor Complex in Merritt Island, Florida. President Jimmy Carter awarded the Congressional Space Medal of Honor posthumously to Grissom on October 1, 1978. President Bill Clinton awarded it to White and Chaffee on December 17, 1997.

                                    An Apollo 1 mission patch was left on the Moon's surface after the first manned lunar landing by Apollo 11 crew members Neil Armstrong and Buzz Aldrin. The Apollo 15 mission left on the surface of the Moon a tiny memorial statue, Fallen Astronaut, along with a plaque containing the names of the Apollo 1 astronauts, among others including Soviet cosmonauts, who perished in the pursuit of human space flight.
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <a href="#mission12">
                    <button className="modal_button">
                        <div className="accent_line"></div>
                        <div className="mission_title_small">Apollo 12</div>
                        <div className="mission_tile_container">
                            <div className="mission_title">Apollo 12</div>
                            <div className="tile_line"></div>
                            <div className="date_title">Mission Date</div>
                            <div className="mission_tile_info">
                                <span className="mission_month">11.14&ndash;11.24 </span>
                                <span> 1969</span>
                            </div>
                        </div>
                    </button>
                </a>

                <div id="mission12" class="modalDialog">
                    <div>
                        <a href="#close" title="Close">
                            <div className="close" />
                        </a>
                        <div className="story_container">
                            <div className="modal_mission">Mission</div>
                            <div className="modal_num">12</div>

                            <div className="crew_container">
                                <div className="crew_members">Crew Members</div>
                                <div className="crew_table">
                                    <div>
                                        <h4>Position</h4>
                                        <div>Command Pilot</div>
                                        <div>Senior Pilot</div>
                                        <div>Pilot</div>
                                    </div>
                                    <div>
                                        <h4>Astronaut</h4>
                                        <div>Virgil I. "Gus" Grissom</div>
                                        <div>Edward H. White II</div>
                                        <div>Roger B. Chaffee</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mission_overview">
                                <h2>Basic Overview</h2>
                                Apollo 1, initially designated AS-204, was the first manned mission of the United States Apollo program, the program to land the first men on the Moon. Planned as the first low Earth orbital test of the Apollo command and service module with a crew, to launch on February 21, 1967, the mission never flew; a cabin fire during a launch rehearsal test at Cape Kennedy Air Force Station Launch Complex 34 on January 27 killed all three crew members—Command Pilot Virgil I. "Gus" Grissom, Senior Pilot Ed White, and Pilot Roger B. Chaffee—and destroyed the command module (CM). The name Apollo 1, chosen by the crew, was officially retired by NASA in commemoration of them on April 24, 1967.
                            </div>
                            <div className="modal_accent_line"></div>
                            <div className="story_info_container">


                                <div className="background_section">
                                    <h4>Mission Background</h4>
                                    <p>
                                        Grissom declared his intent to keep his craft in orbit for a full 14 days. A newspaper article published on August 4, 1966, referred to the flight as "Apollo 1". CM-012 arrived at the Kennedy Space Center on August 26, labeled Apollo One by NAA on its packaging. In October 1966, NASA announced the flight would carry a small television camera to broadcast live from the command module. The camera would also be used to allow flight controllers to monitor the spacecraft's instrument panel in flight. Television cameras were carried aboard all manned Apollo missions.
                                </p>
                                    <h5>Spacecraft Preparation</h5>
                                    <p>
                                        The Apollo command and service module was much bigger and far more complex than any previously implemented spacecraft design. In October 1963, Joseph F. Shea was named Apollo Spacecraft Program Office (ASPO) manager, responsible for managing the design and construction of both the CSM and the LM. In a spacecraft review meeting held with Shea on August 19, 1966 (a week before delivery), the crew expressed concern about the amount of flammable material (mainly nylon netting and Velcro) in the cabin, which both astronauts and technicians found convenient for holding tools and equipment in place. Although Shea gave the spacecraft a passing grade, after the meeting they gave him a crew portrait they had posed with heads bowed and hands clasped in prayer, with the inscription: <h6>"It isn't that we don't trust you, Joe, but this time we've decided to go over your head."</h6> Shea gave his staff orders to tell North American to remove the flammables from the cabin, but did not supervise the issue personally.
                                </p>
                                </div>
                                <div className="additional_section">
                                    <h4>Accident</h4>
                                    {/* <h5>Plugs Out Test</h5> */}
                                    <p>The launch simulation on January 27, 1967, on pad 34, was a "plugs-out" test to determine whether the spacecraft would operate nominally on (simulated) internal power while detached from all cables and umbilicals. Passing this test was essential to making the February 21 launch date. The test was considered non-hazardous because neither the launch vehicle nor the spacecraft was loaded with fuel or cryogenics, and all pyrotechnic systems (explosive bolts) were disabled.
                                </p>
                                    <p>Movement by the astronauts was detected by the spacecraft's inertial measurement unit and the astronaut's biomedical sensors, and also indicated by increases in oxygen spacesuit flow, and sounds from Grissom's stuck-open microphone. There was no evidence to identify the movement, or whether it was related to the fire. The stuck microphone was part of a problem with the communications loop connecting the crew, the Operations and Checkout Building, and the Complex 34 blockhouse control room. The poor communications led Grissom to remark: "How are we going to get to the Moon if we can't talk between two or three buildings?"
                                </p>
                                    {/* <h5>Fire</h5> */}
                                    <p>
                                        The crew members were using the time to run through their checklist again, when a momentary increase in AC Bus 2 voltage occurred. Nine seconds later, one of the astronauts (some listeners and laboratory analysis indicate Grissom) exclaimed "Hey!", "Fire!", or "Flame!"; this was followed by two seconds of scuffling sounds through Grissom's open microphone. This was immediately followed at by someone (believed by most listeners, and supported by laboratory analysis, to be Chaffee) saying, "[I've, or We've] got a fire in the cockpit." After 6.8 seconds of silence, a second, badly garbled transmission occurred, interpreted by various listeners as:
                                            <h6>
                                            "They're fighting a bad fire—Let's get out ....Open 'er up"
                                            "We've got a bad fire—Let's get out ....We're burning up", or
                                            "I'm reporting a bad fire ....I'm getting out ....".
                                            This transmission lasted 5.0 seconds and ended with a cry of pain.
                                             </h6></p>

                                    <p>
                                        It took five minutes for the pad workers to open all three hatch layers, and they could not drop the inner hatch to the cabin floor as intended, so they pushed it out of the way to one side. Although the cabin lights remained lit, they were at first unable to find the astronauts through the dense smoke. As the smoke cleared, they found the bodies, but were not able to remove them. The fire had partly melted Grissom's and White's nylon space suits and the hoses connecting them to the life support system. Grissom had removed his restraints and was lying on the floor of the spacecraft. White's restraints were burned through, and he was found lying sideways just below the hatch. It was determined that he had tried to open the hatch per the emergency procedure, but was not able to do so against the internal pressure. Chaffee was found strapped into his right-hand seat, as procedure called for him to maintain communication until White opened the hatch. Because of the large strands of melted nylon fusing the astronauts to the cabin interior, removing the bodies took nearly 90 minutes.
                                </p>
                                </div>

                                <div className="last_section">
                                    <h4>Memorials</h4>
                                    Gus Grissom and Roger Chaffee were buried at Arlington National Cemetery. Ed White was buried at West Point Cemetery on the grounds of the United States Military Academy in West Point, New York. Their names are among those of several astronauts and cosmonauts who have died in the line of duty, listed on the Space Mirror Memorial at the Kennedy Space Center Visitor Complex in Merritt Island, Florida. President Jimmy Carter awarded the Congressional Space Medal of Honor posthumously to Grissom on October 1, 1978. President Bill Clinton awarded it to White and Chaffee on December 17, 1997.

                                    An Apollo 1 mission patch was left on the Moon's surface after the first manned lunar landing by Apollo 11 crew members Neil Armstrong and Buzz Aldrin. The Apollo 15 mission left on the surface of the Moon a tiny memorial statue, Fallen Astronaut, along with a plaque containing the names of the Apollo 1 astronauts, among others including Soviet cosmonauts, who perished in the pursuit of human space flight.
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <a href="#mission13">
                    <button className="modal_button">
                        <div className="accent_line"></div>
                        <div className="mission_title_small">Apollo 13</div>
                        <div className="mission_tile_container">
                            <div className="mission_title">Apollo 13</div>
                            <div className="tile_line2"></div>
                            <div className="date_title">Mission Date</div>
                            <div className="mission_tile_info">
                                <span className="mission_month">04.11&ndash;04.17 </span>
                                <span> 1970</span>
                            </div>
                        </div>
                    </button>
                </a>

                <div id="mission13" class="modalDialog">
                    <div>
                        <a href="#close" title="Close">
                            <div className="close" />
                        </a>
                        <div className="story_container">
                            <div className="modal_mission">Mission</div>
                            <div className="modal_num">13</div>

                            <div className="crew_container">
                                <div className="crew_members">Crew Members</div>
                                <div className="crew_table">
                                    <div>
                                        <h4>Position</h4>
                                        <div>Command Pilot</div>
                                        <div>Senior Pilot</div>
                                        <div>Pilot</div>
                                    </div>
                                    <div>
                                        <h4>Astronaut</h4>
                                        <div>Virgil I. "Gus" Grissom</div>
                                        <div>Edward H. White II</div>
                                        <div>Roger B. Chaffee</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mission_overview">
                                <h2>Basic Overview</h2>
                                Apollo 1, initially designated AS-204, was the first manned mission of the United States Apollo program, the program to land the first men on the Moon. Planned as the first low Earth orbital test of the Apollo command and service module with a crew, to launch on February 21, 1967, the mission never flew; a cabin fire during a launch rehearsal test at Cape Kennedy Air Force Station Launch Complex 34 on January 27 killed all three crew members—Command Pilot Virgil I. "Gus" Grissom, Senior Pilot Ed White, and Pilot Roger B. Chaffee—and destroyed the command module (CM). The name Apollo 1, chosen by the crew, was officially retired by NASA in commemoration of them on April 24, 1967.
                            </div>
                            <div className="modal_accent_line"></div>
                            <div className="story_info_container">


                                <div className="background_section">
                                    <h4>Mission Background</h4>
                                    <p>
                                        Grissom declared his intent to keep his craft in orbit for a full 14 days. A newspaper article published on August 4, 1966, referred to the flight as "Apollo 1". CM-012 arrived at the Kennedy Space Center on August 26, labeled Apollo One by NAA on its packaging. In October 1966, NASA announced the flight would carry a small television camera to broadcast live from the command module. The camera would also be used to allow flight controllers to monitor the spacecraft's instrument panel in flight. Television cameras were carried aboard all manned Apollo missions.
                                </p>
                                    <h5>Spacecraft Preparation</h5>
                                    <p>
                                        The Apollo command and service module was much bigger and far more complex than any previously implemented spacecraft design. In October 1963, Joseph F. Shea was named Apollo Spacecraft Program Office (ASPO) manager, responsible for managing the design and construction of both the CSM and the LM. In a spacecraft review meeting held with Shea on August 19, 1966 (a week before delivery), the crew expressed concern about the amount of flammable material (mainly nylon netting and Velcro) in the cabin, which both astronauts and technicians found convenient for holding tools and equipment in place. Although Shea gave the spacecraft a passing grade, after the meeting they gave him a crew portrait they had posed with heads bowed and hands clasped in prayer, with the inscription: <h6>"It isn't that we don't trust you, Joe, but this time we've decided to go over your head."</h6> Shea gave his staff orders to tell North American to remove the flammables from the cabin, but did not supervise the issue personally.
                                </p>
                                </div>
                                <div className="additional_section">
                                    <h4>Accident</h4>
                                    {/* <h5>Plugs Out Test</h5> */}
                                    <p>The launch simulation on January 27, 1967, on pad 34, was a "plugs-out" test to determine whether the spacecraft would operate nominally on (simulated) internal power while detached from all cables and umbilicals. Passing this test was essential to making the February 21 launch date. The test was considered non-hazardous because neither the launch vehicle nor the spacecraft was loaded with fuel or cryogenics, and all pyrotechnic systems (explosive bolts) were disabled.
                                </p>
                                    <p>Movement by the astronauts was detected by the spacecraft's inertial measurement unit and the astronaut's biomedical sensors, and also indicated by increases in oxygen spacesuit flow, and sounds from Grissom's stuck-open microphone. There was no evidence to identify the movement, or whether it was related to the fire. The stuck microphone was part of a problem with the communications loop connecting the crew, the Operations and Checkout Building, and the Complex 34 blockhouse control room. The poor communications led Grissom to remark: "How are we going to get to the Moon if we can't talk between two or three buildings?"
                                </p>
                                    {/* <h5>Fire</h5> */}
                                    <p>
                                        The crew members were using the time to run through their checklist again, when a momentary increase in AC Bus 2 voltage occurred. Nine seconds later, one of the astronauts (some listeners and laboratory analysis indicate Grissom) exclaimed "Hey!", "Fire!", or "Flame!"; this was followed by two seconds of scuffling sounds through Grissom's open microphone. This was immediately followed at by someone (believed by most listeners, and supported by laboratory analysis, to be Chaffee) saying, "[I've, or We've] got a fire in the cockpit." After 6.8 seconds of silence, a second, badly garbled transmission occurred, interpreted by various listeners as:
                                            <h6>
                                            "They're fighting a bad fire—Let's get out ....Open 'er up"
                                            "We've got a bad fire—Let's get out ....We're burning up", or
                                            "I'm reporting a bad fire ....I'm getting out ....".
                                            This transmission lasted 5.0 seconds and ended with a cry of pain.
                                             </h6></p>

                                    <p>
                                        It took five minutes for the pad workers to open all three hatch layers, and they could not drop the inner hatch to the cabin floor as intended, so they pushed it out of the way to one side. Although the cabin lights remained lit, they were at first unable to find the astronauts through the dense smoke. As the smoke cleared, they found the bodies, but were not able to remove them. The fire had partly melted Grissom's and White's nylon space suits and the hoses connecting them to the life support system. Grissom had removed his restraints and was lying on the floor of the spacecraft. White's restraints were burned through, and he was found lying sideways just below the hatch. It was determined that he had tried to open the hatch per the emergency procedure, but was not able to do so against the internal pressure. Chaffee was found strapped into his right-hand seat, as procedure called for him to maintain communication until White opened the hatch. Because of the large strands of melted nylon fusing the astronauts to the cabin interior, removing the bodies took nearly 90 minutes.
                                </p>
                                </div>

                                <div className="last_section">
                                    <h4>Memorials</h4>
                                    Gus Grissom and Roger Chaffee were buried at Arlington National Cemetery. Ed White was buried at West Point Cemetery on the grounds of the United States Military Academy in West Point, New York. Their names are among those of several astronauts and cosmonauts who have died in the line of duty, listed on the Space Mirror Memorial at the Kennedy Space Center Visitor Complex in Merritt Island, Florida. President Jimmy Carter awarded the Congressional Space Medal of Honor posthumously to Grissom on October 1, 1978. President Bill Clinton awarded it to White and Chaffee on December 17, 1997.

                                    An Apollo 1 mission patch was left on the Moon's surface after the first manned lunar landing by Apollo 11 crew members Neil Armstrong and Buzz Aldrin. The Apollo 15 mission left on the surface of the Moon a tiny memorial statue, Fallen Astronaut, along with a plaque containing the names of the Apollo 1 astronauts, among others including Soviet cosmonauts, who perished in the pursuit of human space flight.
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <a href="#mission14">
                    <button className="modal_button">
                        <div className="accent_line"></div>
                        <div className="mission_title_small">Apollo 14</div>
                        <div className="mission_tile_container">
                            <div className="mission_title">Apollo 14</div>
                            <div className="tile_line"></div>
                            <div className="date_title">Mission Date</div>
                            <div className="mission_tile_info">
                                <span className="mission_month">01.31&ndash;02.09 </span>
                                <span> 1971</span>
                            </div>
                        </div>
                    </button>
                </a>

                <div id="mission14" class="modalDialog">
                    <div>
                        <a href="#close" title="Close">
                            <div className="close" />
                        </a>
                        <div className="story_container">
                            <div className="modal_mission">Mission</div>
                            <div className="modal_num">14</div>

                            <div className="crew_container">
                                <div className="crew_members">Crew Members</div>
                                <div className="crew_table">
                                    <div>
                                        <h4>Position</h4>
                                        <div>Command Pilot</div>
                                        <div>Senior Pilot</div>
                                        <div>Pilot</div>
                                    </div>
                                    <div>
                                        <h4>Astronaut</h4>
                                        <div>Virgil I. "Gus" Grissom</div>
                                        <div>Edward H. White II</div>
                                        <div>Roger B. Chaffee</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mission_overview">
                                <h2>Basic Overview</h2>
                                Apollo 1, initially designated AS-204, was the first manned mission of the United States Apollo program, the program to land the first men on the Moon. Planned as the first low Earth orbital test of the Apollo command and service module with a crew, to launch on February 21, 1967, the mission never flew; a cabin fire during a launch rehearsal test at Cape Kennedy Air Force Station Launch Complex 34 on January 27 killed all three crew members—Command Pilot Virgil I. "Gus" Grissom, Senior Pilot Ed White, and Pilot Roger B. Chaffee—and destroyed the command module (CM). The name Apollo 1, chosen by the crew, was officially retired by NASA in commemoration of them on April 24, 1967.
                            </div>
                            <div className="modal_accent_line"></div>
                            <div className="story_info_container">


                                <div className="background_section">
                                    <h4>Mission Background</h4>
                                    <p>
                                        Grissom declared his intent to keep his craft in orbit for a full 14 days. A newspaper article published on August 4, 1966, referred to the flight as "Apollo 1". CM-012 arrived at the Kennedy Space Center on August 26, labeled Apollo One by NAA on its packaging. In October 1966, NASA announced the flight would carry a small television camera to broadcast live from the command module. The camera would also be used to allow flight controllers to monitor the spacecraft's instrument panel in flight. Television cameras were carried aboard all manned Apollo missions.
                                </p>
                                    <h5>Spacecraft Preparation</h5>
                                    <p>
                                        The Apollo command and service module was much bigger and far more complex than any previously implemented spacecraft design. In October 1963, Joseph F. Shea was named Apollo Spacecraft Program Office (ASPO) manager, responsible for managing the design and construction of both the CSM and the LM. In a spacecraft review meeting held with Shea on August 19, 1966 (a week before delivery), the crew expressed concern about the amount of flammable material (mainly nylon netting and Velcro) in the cabin, which both astronauts and technicians found convenient for holding tools and equipment in place. Although Shea gave the spacecraft a passing grade, after the meeting they gave him a crew portrait they had posed with heads bowed and hands clasped in prayer, with the inscription: <h6>"It isn't that we don't trust you, Joe, but this time we've decided to go over your head."</h6> Shea gave his staff orders to tell North American to remove the flammables from the cabin, but did not supervise the issue personally.
                                </p>
                                </div>
                                <div className="additional_section">
                                    <h4>Accident</h4>
                                    {/* <h5>Plugs Out Test</h5> */}
                                    <p>The launch simulation on January 27, 1967, on pad 34, was a "plugs-out" test to determine whether the spacecraft would operate nominally on (simulated) internal power while detached from all cables and umbilicals. Passing this test was essential to making the February 21 launch date. The test was considered non-hazardous because neither the launch vehicle nor the spacecraft was loaded with fuel or cryogenics, and all pyrotechnic systems (explosive bolts) were disabled.
                                </p>
                                    <p>Movement by the astronauts was detected by the spacecraft's inertial measurement unit and the astronaut's biomedical sensors, and also indicated by increases in oxygen spacesuit flow, and sounds from Grissom's stuck-open microphone. There was no evidence to identify the movement, or whether it was related to the fire. The stuck microphone was part of a problem with the communications loop connecting the crew, the Operations and Checkout Building, and the Complex 34 blockhouse control room. The poor communications led Grissom to remark: "How are we going to get to the Moon if we can't talk between two or three buildings?"
                                </p>
                                    {/* <h5>Fire</h5> */}
                                    <p>
                                        The crew members were using the time to run through their checklist again, when a momentary increase in AC Bus 2 voltage occurred. Nine seconds later, one of the astronauts (some listeners and laboratory analysis indicate Grissom) exclaimed "Hey!", "Fire!", or "Flame!"; this was followed by two seconds of scuffling sounds through Grissom's open microphone. This was immediately followed at by someone (believed by most listeners, and supported by laboratory analysis, to be Chaffee) saying, "[I've, or We've] got a fire in the cockpit." After 6.8 seconds of silence, a second, badly garbled transmission occurred, interpreted by various listeners as:
                                            <h6>
                                            "They're fighting a bad fire—Let's get out ....Open 'er up"
                                            "We've got a bad fire—Let's get out ....We're burning up", or
                                            "I'm reporting a bad fire ....I'm getting out ....".
                                            This transmission lasted 5.0 seconds and ended with a cry of pain.
                                             </h6></p>

                                    <p>
                                        It took five minutes for the pad workers to open all three hatch layers, and they could not drop the inner hatch to the cabin floor as intended, so they pushed it out of the way to one side. Although the cabin lights remained lit, they were at first unable to find the astronauts through the dense smoke. As the smoke cleared, they found the bodies, but were not able to remove them. The fire had partly melted Grissom's and White's nylon space suits and the hoses connecting them to the life support system. Grissom had removed his restraints and was lying on the floor of the spacecraft. White's restraints were burned through, and he was found lying sideways just below the hatch. It was determined that he had tried to open the hatch per the emergency procedure, but was not able to do so against the internal pressure. Chaffee was found strapped into his right-hand seat, as procedure called for him to maintain communication until White opened the hatch. Because of the large strands of melted nylon fusing the astronauts to the cabin interior, removing the bodies took nearly 90 minutes.
                                </p>
                                </div>

                                <div className="last_section">
                                    <h4>Memorials</h4>
                                    Gus Grissom and Roger Chaffee were buried at Arlington National Cemetery. Ed White was buried at West Point Cemetery on the grounds of the United States Military Academy in West Point, New York. Their names are among those of several astronauts and cosmonauts who have died in the line of duty, listed on the Space Mirror Memorial at the Kennedy Space Center Visitor Complex in Merritt Island, Florida. President Jimmy Carter awarded the Congressional Space Medal of Honor posthumously to Grissom on October 1, 1978. President Bill Clinton awarded it to White and Chaffee on December 17, 1997.

                                    An Apollo 1 mission patch was left on the Moon's surface after the first manned lunar landing by Apollo 11 crew members Neil Armstrong and Buzz Aldrin. The Apollo 15 mission left on the surface of the Moon a tiny memorial statue, Fallen Astronaut, along with a plaque containing the names of the Apollo 1 astronauts, among others including Soviet cosmonauts, who perished in the pursuit of human space flight.
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <a href="#mission15">
                    <button className="modal_button">
                        <div className="accent_line"></div>
                        <div className="mission_title_small">Apollo 15</div>
                        <div className="mission_tile_container">
                            <div className="mission_title">Apollo 15</div>
                            <div className="tile_line2"></div>
                            <div className="date_title">Mission Date</div>
                            <div className="mission_tile_info">
                                <span className="mission_month">07.26&ndash;08.07 </span>
                                <span> 1971</span>
                            </div>
                        </div>
                    </button>
                </a>

                <div id="mission15" class="modalDialog">
                    <div>
                        <a href="#close" title="Close">
                            <div className="close" />
                        </a>
                        <div className="story_container">
                            <div className="modal_mission">Mission</div>
                            <div className="modal_num">15</div>

                            <div className="crew_container">
                                <div className="crew_members">Crew Members</div>
                                <div className="crew_table">
                                    <div>
                                        <h4>Position</h4>
                                        <div>Command Pilot</div>
                                        <div>Senior Pilot</div>
                                        <div>Pilot</div>
                                    </div>
                                    <div>
                                        <h4>Astronaut</h4>
                                        <div>Virgil I. "Gus" Grissom</div>
                                        <div>Edward H. White II</div>
                                        <div>Roger B. Chaffee</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mission_overview">
                                <h2>Basic Overview</h2>
                                Apollo 1, initially designated AS-204, was the first manned mission of the United States Apollo program, the program to land the first men on the Moon. Planned as the first low Earth orbital test of the Apollo command and service module with a crew, to launch on February 21, 1967, the mission never flew; a cabin fire during a launch rehearsal test at Cape Kennedy Air Force Station Launch Complex 34 on January 27 killed all three crew members—Command Pilot Virgil I. "Gus" Grissom, Senior Pilot Ed White, and Pilot Roger B. Chaffee—and destroyed the command module (CM). The name Apollo 1, chosen by the crew, was officially retired by NASA in commemoration of them on April 24, 1967.
                            </div>
                            <div className="modal_accent_line"></div>
                            <div className="story_info_container">


                                <div className="background_section">
                                    <h4>Mission Background</h4>
                                    <p>
                                        Grissom declared his intent to keep his craft in orbit for a full 14 days. A newspaper article published on August 4, 1966, referred to the flight as "Apollo 1". CM-012 arrived at the Kennedy Space Center on August 26, labeled Apollo One by NAA on its packaging. In October 1966, NASA announced the flight would carry a small television camera to broadcast live from the command module. The camera would also be used to allow flight controllers to monitor the spacecraft's instrument panel in flight. Television cameras were carried aboard all manned Apollo missions.
                                </p>
                                    <h5>Spacecraft Preparation</h5>
                                    <p>
                                        The Apollo command and service module was much bigger and far more complex than any previously implemented spacecraft design. In October 1963, Joseph F. Shea was named Apollo Spacecraft Program Office (ASPO) manager, responsible for managing the design and construction of both the CSM and the LM. In a spacecraft review meeting held with Shea on August 19, 1966 (a week before delivery), the crew expressed concern about the amount of flammable material (mainly nylon netting and Velcro) in the cabin, which both astronauts and technicians found convenient for holding tools and equipment in place. Although Shea gave the spacecraft a passing grade, after the meeting they gave him a crew portrait they had posed with heads bowed and hands clasped in prayer, with the inscription: <h6>"It isn't that we don't trust you, Joe, but this time we've decided to go over your head."</h6> Shea gave his staff orders to tell North American to remove the flammables from the cabin, but did not supervise the issue personally.
                                </p>
                                </div>
                                <div className="additional_section">
                                    <h4>Accident</h4>
                                    {/* <h5>Plugs Out Test</h5> */}
                                    <p>The launch simulation on January 27, 1967, on pad 34, was a "plugs-out" test to determine whether the spacecraft would operate nominally on (simulated) internal power while detached from all cables and umbilicals. Passing this test was essential to making the February 21 launch date. The test was considered non-hazardous because neither the launch vehicle nor the spacecraft was loaded with fuel or cryogenics, and all pyrotechnic systems (explosive bolts) were disabled.
                                </p>
                                    <p>Movement by the astronauts was detected by the spacecraft's inertial measurement unit and the astronaut's biomedical sensors, and also indicated by increases in oxygen spacesuit flow, and sounds from Grissom's stuck-open microphone. There was no evidence to identify the movement, or whether it was related to the fire. The stuck microphone was part of a problem with the communications loop connecting the crew, the Operations and Checkout Building, and the Complex 34 blockhouse control room. The poor communications led Grissom to remark: "How are we going to get to the Moon if we can't talk between two or three buildings?"
                                </p>
                                    {/* <h5>Fire</h5> */}
                                    <p>
                                        The crew members were using the time to run through their checklist again, when a momentary increase in AC Bus 2 voltage occurred. Nine seconds later, one of the astronauts (some listeners and laboratory analysis indicate Grissom) exclaimed "Hey!", "Fire!", or "Flame!"; this was followed by two seconds of scuffling sounds through Grissom's open microphone. This was immediately followed at by someone (believed by most listeners, and supported by laboratory analysis, to be Chaffee) saying, "[I've, or We've] got a fire in the cockpit." After 6.8 seconds of silence, a second, badly garbled transmission occurred, interpreted by various listeners as:
                                            <h6>
                                            "They're fighting a bad fire—Let's get out ....Open 'er up"
                                            "We've got a bad fire—Let's get out ....We're burning up", or
                                            "I'm reporting a bad fire ....I'm getting out ....".
                                            This transmission lasted 5.0 seconds and ended with a cry of pain.
                                             </h6></p>

                                    <p>
                                        It took five minutes for the pad workers to open all three hatch layers, and they could not drop the inner hatch to the cabin floor as intended, so they pushed it out of the way to one side. Although the cabin lights remained lit, they were at first unable to find the astronauts through the dense smoke. As the smoke cleared, they found the bodies, but were not able to remove them. The fire had partly melted Grissom's and White's nylon space suits and the hoses connecting them to the life support system. Grissom had removed his restraints and was lying on the floor of the spacecraft. White's restraints were burned through, and he was found lying sideways just below the hatch. It was determined that he had tried to open the hatch per the emergency procedure, but was not able to do so against the internal pressure. Chaffee was found strapped into his right-hand seat, as procedure called for him to maintain communication until White opened the hatch. Because of the large strands of melted nylon fusing the astronauts to the cabin interior, removing the bodies took nearly 90 minutes.
                                </p>
                                </div>

                                <div className="last_section">
                                    <h4>Memorials</h4>
                                    Gus Grissom and Roger Chaffee were buried at Arlington National Cemetery. Ed White was buried at West Point Cemetery on the grounds of the United States Military Academy in West Point, New York. Their names are among those of several astronauts and cosmonauts who have died in the line of duty, listed on the Space Mirror Memorial at the Kennedy Space Center Visitor Complex in Merritt Island, Florida. President Jimmy Carter awarded the Congressional Space Medal of Honor posthumously to Grissom on October 1, 1978. President Bill Clinton awarded it to White and Chaffee on December 17, 1997.

                                    An Apollo 1 mission patch was left on the Moon's surface after the first manned lunar landing by Apollo 11 crew members Neil Armstrong and Buzz Aldrin. The Apollo 15 mission left on the surface of the Moon a tiny memorial statue, Fallen Astronaut, along with a plaque containing the names of the Apollo 1 astronauts, among others including Soviet cosmonauts, who perished in the pursuit of human space flight.
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <a href="#mission16">
                    <button className="modal_button">
                        <div className="accent_line"></div>
                        <div className="mission_title_small">Apollo 16</div>
                        <div className="mission_tile_container">
                            <div className="mission_title">Apollo 16</div>
                            <div className="tile_line"></div>
                            <div className="date_title">Mission Date</div>
                            <div className="mission_tile_info">
                                <span className="mission_month">04.16&ndash;04.27 </span>
                                <span> 1972</span>
                            </div>
                        </div>
                    </button>
                </a>

                <div id="mission16" class="modalDialog">
                    <div>
                        <a href="#close" title="Close">
                            <div className="close" />
                        </a>
                        <div className="story_container">
                            <div className="modal_mission">Mission</div>
                            <div className="modal_num">16</div>

                            <div className="crew_container">
                                <div className="crew_members">Crew Members</div>
                                <div className="crew_table">
                                    <div>
                                        <h4>Position</h4>
                                        <div>Command Pilot</div>
                                        <div>Senior Pilot</div>
                                        <div>Pilot</div>
                                    </div>
                                    <div>
                                        <h4>Astronaut</h4>
                                        <div>Virgil I. "Gus" Grissom</div>
                                        <div>Edward H. White II</div>
                                        <div>Roger B. Chaffee</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mission_overview">
                                <h2>Basic Overview</h2>
                                Apollo 1, initially designated AS-204, was the first manned mission of the United States Apollo program, the program to land the first men on the Moon. Planned as the first low Earth orbital test of the Apollo command and service module with a crew, to launch on February 21, 1967, the mission never flew; a cabin fire during a launch rehearsal test at Cape Kennedy Air Force Station Launch Complex 34 on January 27 killed all three crew members—Command Pilot Virgil I. "Gus" Grissom, Senior Pilot Ed White, and Pilot Roger B. Chaffee—and destroyed the command module (CM). The name Apollo 1, chosen by the crew, was officially retired by NASA in commemoration of them on April 24, 1967.
                            </div>
                            <div className="modal_accent_line"></div>
                            <div className="story_info_container">


                                <div className="background_section">
                                    <h4>Mission Background</h4>
                                    <p>
                                        Grissom declared his intent to keep his craft in orbit for a full 14 days. A newspaper article published on August 4, 1966, referred to the flight as "Apollo 1". CM-012 arrived at the Kennedy Space Center on August 26, labeled Apollo One by NAA on its packaging. In October 1966, NASA announced the flight would carry a small television camera to broadcast live from the command module. The camera would also be used to allow flight controllers to monitor the spacecraft's instrument panel in flight. Television cameras were carried aboard all manned Apollo missions.
                                </p>
                                    <h5>Spacecraft Preparation</h5>
                                    <p>
                                        The Apollo command and service module was much bigger and far more complex than any previously implemented spacecraft design. In October 1963, Joseph F. Shea was named Apollo Spacecraft Program Office (ASPO) manager, responsible for managing the design and construction of both the CSM and the LM. In a spacecraft review meeting held with Shea on August 19, 1966 (a week before delivery), the crew expressed concern about the amount of flammable material (mainly nylon netting and Velcro) in the cabin, which both astronauts and technicians found convenient for holding tools and equipment in place. Although Shea gave the spacecraft a passing grade, after the meeting they gave him a crew portrait they had posed with heads bowed and hands clasped in prayer, with the inscription: <h6>"It isn't that we don't trust you, Joe, but this time we've decided to go over your head."</h6> Shea gave his staff orders to tell North American to remove the flammables from the cabin, but did not supervise the issue personally.
                                </p>
                                </div>
                                <div className="additional_section">
                                    <h4>Accident</h4>
                                    {/* <h5>Plugs Out Test</h5> */}
                                    <p>The launch simulation on January 27, 1967, on pad 34, was a "plugs-out" test to determine whether the spacecraft would operate nominally on (simulated) internal power while detached from all cables and umbilicals. Passing this test was essential to making the February 21 launch date. The test was considered non-hazardous because neither the launch vehicle nor the spacecraft was loaded with fuel or cryogenics, and all pyrotechnic systems (explosive bolts) were disabled.
                                </p>
                                    <p>Movement by the astronauts was detected by the spacecraft's inertial measurement unit and the astronaut's biomedical sensors, and also indicated by increases in oxygen spacesuit flow, and sounds from Grissom's stuck-open microphone. There was no evidence to identify the movement, or whether it was related to the fire. The stuck microphone was part of a problem with the communications loop connecting the crew, the Operations and Checkout Building, and the Complex 34 blockhouse control room. The poor communications led Grissom to remark: "How are we going to get to the Moon if we can't talk between two or three buildings?"
                                </p>
                                    {/* <h5>Fire</h5> */}
                                    <p>
                                        The crew members were using the time to run through their checklist again, when a momentary increase in AC Bus 2 voltage occurred. Nine seconds later, one of the astronauts (some listeners and laboratory analysis indicate Grissom) exclaimed "Hey!", "Fire!", or "Flame!"; this was followed by two seconds of scuffling sounds through Grissom's open microphone. This was immediately followed at by someone (believed by most listeners, and supported by laboratory analysis, to be Chaffee) saying, "[I've, or We've] got a fire in the cockpit." After 6.8 seconds of silence, a second, badly garbled transmission occurred, interpreted by various listeners as:
                                            <h6>
                                            "They're fighting a bad fire—Let's get out ....Open 'er up"
                                            "We've got a bad fire—Let's get out ....We're burning up", or
                                            "I'm reporting a bad fire ....I'm getting out ....".
                                            This transmission lasted 5.0 seconds and ended with a cry of pain.
                                             </h6></p>

                                    <p>
                                        It took five minutes for the pad workers to open all three hatch layers, and they could not drop the inner hatch to the cabin floor as intended, so they pushed it out of the way to one side. Although the cabin lights remained lit, they were at first unable to find the astronauts through the dense smoke. As the smoke cleared, they found the bodies, but were not able to remove them. The fire had partly melted Grissom's and White's nylon space suits and the hoses connecting them to the life support system. Grissom had removed his restraints and was lying on the floor of the spacecraft. White's restraints were burned through, and he was found lying sideways just below the hatch. It was determined that he had tried to open the hatch per the emergency procedure, but was not able to do so against the internal pressure. Chaffee was found strapped into his right-hand seat, as procedure called for him to maintain communication until White opened the hatch. Because of the large strands of melted nylon fusing the astronauts to the cabin interior, removing the bodies took nearly 90 minutes.
                                </p>
                                </div>

                                <div className="last_section">
                                    <h4>Memorials</h4>
                                    Gus Grissom and Roger Chaffee were buried at Arlington National Cemetery. Ed White was buried at West Point Cemetery on the grounds of the United States Military Academy in West Point, New York. Their names are among those of several astronauts and cosmonauts who have died in the line of duty, listed on the Space Mirror Memorial at the Kennedy Space Center Visitor Complex in Merritt Island, Florida. President Jimmy Carter awarded the Congressional Space Medal of Honor posthumously to Grissom on October 1, 1978. President Bill Clinton awarded it to White and Chaffee on December 17, 1997.

                                    An Apollo 1 mission patch was left on the Moon's surface after the first manned lunar landing by Apollo 11 crew members Neil Armstrong and Buzz Aldrin. The Apollo 15 mission left on the surface of the Moon a tiny memorial statue, Fallen Astronaut, along with a plaque containing the names of the Apollo 1 astronauts, among others including Soviet cosmonauts, who perished in the pursuit of human space flight.
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <a href="#mission17">
                    <button className="modal_button">
                        <div className="accent_line"></div>
                        <div className="mission_title_small">Apollo 17</div>
                        <div className="mission_tile_container">
                            <div className="mission_title">Apollo 17</div>
                            <div className="tile_line2"></div>
                            <div className="date_title">Mission Date</div>
                            <div className="mission_tile_info">
                                <span className="mission_month">12.07&ndash;12.19 </span>
                                <span> 1972</span>
                            </div>
                        </div>
                    </button>
                </a>

                <div id="mission17" class="modalDialog">
                    <div>
                        <a href="#close" title="Close">
                            <div className="close" />
                        </a>
                        <div className="story_container">
                            <div className="modal_mission">Mission</div>
                            <div className="modal_num">17</div>

                            <div className="crew_container">
                                <div className="crew_members">Crew Members</div>
                                <div className="crew_table">
                                    <div>
                                        <h4>Position</h4>
                                        <div>Command Pilot</div>
                                        <div>Senior Pilot</div>
                                        <div>Pilot</div>
                                    </div>
                                    <div>
                                        <h4>Astronaut</h4>
                                        <div>Virgil I. "Gus" Grissom</div>
                                        <div>Edward H. White II</div>
                                        <div>Roger B. Chaffee</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mission_overview">
                                <h2>Basic Overview</h2>
                                Apollo 1, initially designated AS-204, was the first manned mission of the United States Apollo program, the program to land the first men on the Moon. Planned as the first low Earth orbital test of the Apollo command and service module with a crew, to launch on February 21, 1967, the mission never flew; a cabin fire during a launch rehearsal test at Cape Kennedy Air Force Station Launch Complex 34 on January 27 killed all three crew members—Command Pilot Virgil I. "Gus" Grissom, Senior Pilot Ed White, and Pilot Roger B. Chaffee—and destroyed the command module (CM). The name Apollo 1, chosen by the crew, was officially retired by NASA in commemoration of them on April 24, 1967.
                            </div>
                            <div className="modal_accent_line"></div>
                            <div className="story_info_container">


                                <div className="background_section">
                                    <h4>Mission Background</h4>
                                    <p>
                                        Grissom declared his intent to keep his craft in orbit for a full 14 days. A newspaper article published on August 4, 1966, referred to the flight as "Apollo 1". CM-012 arrived at the Kennedy Space Center on August 26, labeled Apollo One by NAA on its packaging. In October 1966, NASA announced the flight would carry a small television camera to broadcast live from the command module. The camera would also be used to allow flight controllers to monitor the spacecraft's instrument panel in flight. Television cameras were carried aboard all manned Apollo missions.
                                </p>
                                    <h5>Spacecraft Preparation</h5>
                                    <p>
                                        The Apollo command and service module was much bigger and far more complex than any previously implemented spacecraft design. In October 1963, Joseph F. Shea was named Apollo Spacecraft Program Office (ASPO) manager, responsible for managing the design and construction of both the CSM and the LM. In a spacecraft review meeting held with Shea on August 19, 1966 (a week before delivery), the crew expressed concern about the amount of flammable material (mainly nylon netting and Velcro) in the cabin, which both astronauts and technicians found convenient for holding tools and equipment in place. Although Shea gave the spacecraft a passing grade, after the meeting they gave him a crew portrait they had posed with heads bowed and hands clasped in prayer, with the inscription: <h6>"It isn't that we don't trust you, Joe, but this time we've decided to go over your head."</h6> Shea gave his staff orders to tell North American to remove the flammables from the cabin, but did not supervise the issue personally.
                                </p>
                                </div>
                                <div className="additional_section">
                                    <h4>Accident</h4>
                                    {/* <h5>Plugs Out Test</h5> */}
                                    <p>The launch simulation on January 27, 1967, on pad 34, was a "plugs-out" test to determine whether the spacecraft would operate nominally on (simulated) internal power while detached from all cables and umbilicals. Passing this test was essential to making the February 21 launch date. The test was considered non-hazardous because neither the launch vehicle nor the spacecraft was loaded with fuel or cryogenics, and all pyrotechnic systems (explosive bolts) were disabled.
                                </p>
                                    <p>Movement by the astronauts was detected by the spacecraft's inertial measurement unit and the astronaut's biomedical sensors, and also indicated by increases in oxygen spacesuit flow, and sounds from Grissom's stuck-open microphone. There was no evidence to identify the movement, or whether it was related to the fire. The stuck microphone was part of a problem with the communications loop connecting the crew, the Operations and Checkout Building, and the Complex 34 blockhouse control room. The poor communications led Grissom to remark: "How are we going to get to the Moon if we can't talk between two or three buildings?"
                                </p>
                                    {/* <h5>Fire</h5> */}
                                    <p>
                                        The crew members were using the time to run through their checklist again, when a momentary increase in AC Bus 2 voltage occurred. Nine seconds later, one of the astronauts (some listeners and laboratory analysis indicate Grissom) exclaimed "Hey!", "Fire!", or "Flame!"; this was followed by two seconds of scuffling sounds through Grissom's open microphone. This was immediately followed at by someone (believed by most listeners, and supported by laboratory analysis, to be Chaffee) saying, "[I've, or We've] got a fire in the cockpit." After 6.8 seconds of silence, a second, badly garbled transmission occurred, interpreted by various listeners as:
                                            <h6>
                                            "They're fighting a bad fire—Let's get out ....Open 'er up"
                                            "We've got a bad fire—Let's get out ....We're burning up", or
                                            "I'm reporting a bad fire ....I'm getting out ....".
                                            This transmission lasted 5.0 seconds and ended with a cry of pain.
                                             </h6></p>

                                    <p>
                                        It took five minutes for the pad workers to open all three hatch layers, and they could not drop the inner hatch to the cabin floor as intended, so they pushed it out of the way to one side. Although the cabin lights remained lit, they were at first unable to find the astronauts through the dense smoke. As the smoke cleared, they found the bodies, but were not able to remove them. The fire had partly melted Grissom's and White's nylon space suits and the hoses connecting them to the life support system. Grissom had removed his restraints and was lying on the floor of the spacecraft. White's restraints were burned through, and he was found lying sideways just below the hatch. It was determined that he had tried to open the hatch per the emergency procedure, but was not able to do so against the internal pressure. Chaffee was found strapped into his right-hand seat, as procedure called for him to maintain communication until White opened the hatch. Because of the large strands of melted nylon fusing the astronauts to the cabin interior, removing the bodies took nearly 90 minutes.
                                </p>
                                </div>

                                <div className="last_section">
                                    <h4>Memorials</h4>
                                    Gus Grissom and Roger Chaffee were buried at Arlington National Cemetery. Ed White was buried at West Point Cemetery on the grounds of the United States Military Academy in West Point, New York. Their names are among those of several astronauts and cosmonauts who have died in the line of duty, listed on the Space Mirror Memorial at the Kennedy Space Center Visitor Complex in Merritt Island, Florida. President Jimmy Carter awarded the Congressional Space Medal of Honor posthumously to Grissom on October 1, 1978. President Bill Clinton awarded it to White and Chaffee on December 17, 1997.

                                    An Apollo 1 mission patch was left on the Moon's surface after the first manned lunar landing by Apollo 11 crew members Neil Armstrong and Buzz Aldrin. The Apollo 15 mission left on the surface of the Moon a tiny memorial statue, Fallen Astronaut, along with a plaque containing the names of the Apollo 1 astronauts, among others including Soviet cosmonauts, who perished in the pursuit of human space flight.
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ApolloMissionTiles;
