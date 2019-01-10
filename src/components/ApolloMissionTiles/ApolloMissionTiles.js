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
                                        <div>Commander</div>
                                        <div>Command Module Pilot</div>
                                        <div>Lunar Module Pilot</div>
                                    </div>
                                    <div>
                                        <h4>Astronaut</h4>
                                        <div>Frank F. Borman II</div>
                                        <div>James A. Lovell Jr.</div>
                                        <div>William A. Anders</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mission_overview">
                                <h2>Basic Overview</h2>
                                Apollo 8, the second manned spaceflight mission flown in the United States Apollo space program, was launched on December 21, 1968, and became the first manned spacecraft to leave low Earth orbit, reach the Moon, orbit it, and return. The three-astronaut crew—Frank Borman, James Lovell, and William Anders—were the first humans to witness and photograph an Earthrise and to escape the gravity of a celestial body. Apollo 8 was the first human spaceflight from the Kennedy Space Center, located adjacent to Cape Canaveral Air Force Station in Florida.

                                Apollo 8 took 68 hours (almost three days) to travel the distance to the Moon. The crew orbited the Moon ten times over the course of twenty hours, during which they made a Christmas Eve television broadcast in which they read the first ten verses from the Book of Genesis. At the time, the broadcast was the most watched TV program ever. The crew members were named Time magazine's "Men of the Year" for 1968 upon their return.
                            </div>
                            <div className="modal_accent_line"></div>
                            <div className="story_info_container">


                                <div className="background_section">
                                    <h4>Mission Background</h4>
                                    <p>
                                        In the late 1950s and early 1960s, the United States was engaged in the Cold War, a geopolitical rivalry with the Soviet Union. On October 4, 1957, the Soviet Union launched Sputnik 1, the first artificial satellite. This unexpected success stoked fears and imaginations around the world. It not only demonstrated that the Soviet Union had the capability to deliver nuclear weapons over intercontinental distances, it challenged American claims of military, economic, and technological superiority. The launch precipitated the Sputnik crisis and triggered the Space Race. President John F. Kennedy believed that not only was it in the national interest of the United States to be superior to other nations, but that the perception of American power was at least as important as the actuality. It was therefore intolerable to him for the Soviet Union to be more advanced in the field of space exploration. He was determined that the United States should compete, and sought a challenge that maximized its chances of winning.
                                </p>
                                    <h5>Earthrise</h5>
                                    <p>
                                        When the spacecraft came out from behind the Moon for its fourth pass across the front, the crew witnessed an "Earthrise" in person for the first time in human history. NASA's Lunar Orbiter 1 had taken the first picture of an Earthrise from the vicinity of the Moon, on August 23, 1966. Anders saw the Earth emerging from behind the lunar horizon and called in excitement to the others, taking a black-and-white photograph as he did so. Anders asked Lovell for color film and then took Earthrise, a now famous color photo, later picked by Life magazine as one of its hundred photos of the century. Due to the synchronous rotation of the Moon about the Earth, Earthrise is not generally visible from the lunar surface. This is because, as seen from any one place on the Moon's surface, Earth remains in approximately the same position in the lunar sky, either above or below the horizon. Earthrise is generally visible only while orbiting the Moon, and at selected surface locations near the Moon's limb, where libration carries the Earth slightly above and below the lunar horizon
                                </p>
                                </div>
                                <div className="additional_section">
                                    <h4>The Mission</h4>
                                    {/* <h5>Plugs Out Test</h5> */}
                                    <p>Apollo 8 achieved a maximum distance from Earth of 203,752 nautical miles (234,474 statute miles; 377,349 kilometers). Five hours after launch, Mission Control sent a command to the S-IVB to vent its remaining fuel, changing its trajectory. The S-IVB, with the test article attached, posed no further hazard to Apollo 8, passing the orbit of the Moon and going into a solar orbit with an inclination of 23.47° from the plane of the ecliptic, and an orbital period of 340.80 days. It became a derelict object, and will continue to orbit the Sun for many years.
                                </p>
                                    <p>Lovell's main job as Command Module Pilot was as navigator. Although Mission Control normally performed all the actual navigation calculations, it was necessary to have a crew member adept at navigation so that the crew could return to Earth in case communication with Mission Control was lost. Lovell navigated by star sightings using a sextant built into the spacecraft, measuring the angle between a star and the Earth's (or the Moon's) horizon. This task was made difficult by a large cloud of debris around the spacecraft, which made it hard to distinguish the stars.
                                </p>
                                    {/* <h5>Fire</h5> */}
                                    <p>
                                        At about 55 hours and 40 minutes into the flight, and 13 hours before entering lunar orbit, the crew of Apollo 8 became the first humans to enter the gravitational sphere of influence of another celestial body. In other words, the effect of the Moon's gravitational force on Apollo 8 became stronger than that of the Earth. At the time it happened, Apollo 8 was 38,759 miles (62,377 km) from the Moon and had a speed of 3,990 ft/s (1,220 m/s) relative to the Moon. This historic moment was of little interest to the crew, since they were still calculating their trajectory with respect to the launch pad at Kennedy Space Center. They would continue to do so until they performed their last mid-course correction, switching to a reference frame based on ideal orientation for the second engine burn they would make in lunar orbit. After reporting on the status of the spacecraft, Lovell gave the first description of what the lunar surface looked like:</p>

                                    <p>

                                        <h6>"The Moon is essentially grey, no color; looks like plaster of Paris or sort of a grayish beach sand. We can see quite a bit of detail. The Sea of Fertility doesn't stand out as well here as it does back on Earth. There's not as much contrast between that and the surrounding craters. The craters are all rounded off. There's quite a few of them, some of them are newer. Many of them look like—especially the round ones—look like hit by meteorites or projectiles of some sort. Langrenus is quite a huge crater; it's got a central cone to it. The walls of the crater are terraced, about six or seven different terraces on the way down."</h6>
                                    </p>
                                </div>

                                <div className="last_section">
                                    <h4>Legacy</h4>
                                    <h5>Historical Importance</h5>
                                    Apollo 8 came at the end of 1968, a year that had seen much upheaval in the United States and most of the world. Even though the year saw political assassinations, political unrest in the streets of Europe and America, and the Prague Spring, Time magazine chose the crew of Apollo 8 as its Men of the Year for 1968, recognizing them as the people who most influenced events in the preceding year. They had been the first people ever to leave the gravitational influence of the Earth and orbit another celestial body. They had survived a mission that even the crew themselves had rated as having only a fifty-fifty chance of fully succeeding. The effect of Apollo 8 was summed up in a telegram from a stranger, received by Borman after the mission, that stated simply, "Thank you Apollo 8. You saved 1968."

                                    One of the most famous aspects of the flight was the Earthrise picture that the crew took as they came around for their fourth orbit of the Moon. This was the first time that humans had taken such a picture while actually behind the camera, and it has been credited as one of the inspirations of the first Earth Day in 1970. It was selected as the first of Life magazine's 100 Photographs That Changed the World.
                                    <h5>Spacecraft Location</h5>
                                    In January 1970, the spacecraft was delivered to Osaka, Japan, for display in the U.S. pavilion at Expo '70. It is now displayed at the Chicago Museum of Science and Industry, along with a collection of personal items from the flight donated by Lovell and the space suit worn by Frank Borman. Jim Lovell's Apollo 8 space suit is on public display in the Visitor Center at NASA's Glenn Research Center. Bill Anders's space suit is on display at the Science Museum in London, United Kingdom.
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
                                        <div>Commander</div>
                                        <div>Command Module Pilot</div>
                                        <div>Lunar Module Pilot</div>
                                    </div>
                                    <div>
                                        <h4>Astronaut</h4>
                                        <div>James A. McDivitt</div>
                                        <div>David R. Scott</div>
                                        <div>Russell L. Schweickart</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mission_overview">
                                <h2>Basic Overview</h2>
                                Apollo 9 was the third crewed mission in the United States Apollo space program and the first flight of the command and service module (CSM) with the lunar module (LM, pronounced "lem"). The mission's three-person crew consisted of Commander James McDivitt, Command Module Pilot David Scott, and Lunar Module Pilot Rusty Schweickart. The crew spent ten days in low Earth orbit testing several aspects critical to landing on the Moon, including the LM engines, backpack life support systems, navigation systems, and docking maneuvers. The mission was the second crewed launch of a Saturn V rocket. After launching on March 3, 1969, the crew performed the first crewed flight of a LM, the first docking and extraction of a LM, one two-person spacewalk (EVA), and the second docking of two crewed spacecraft—two months after the Soviets performed a spacewalk crew transfer between Soyuz 4 and Soyuz 5. The mission proved the LM worthy of crewed spaceflight. They returned to Earth on March 13, 1969.
                            </div>
                            <div className="modal_accent_line"></div>
                            <div className="story_info_container">


                                <div className="background_section">
                                    <h4>Mission Background</h4>
                                    <p>
                                        Grissom declared his intent to keep his craft in orbit for a full 14 days. A newspaper article published on August 4, 1966, referred to the flight as "Apollo 1". CM-012 arrived at the Kennedy Space Center on August 26, labeled Apollo One by NAA on its packaging. In October 1966, NASA announced the flight would carry a small television camera to broadcast live from the command module. The camera would also be used to allow flight controllers to monitor the spacecraft's instrument panel in flight. Television cameras were carried aboard all manned Apollo missions.
                                </p>
                                    <h5>Mission Insignia</h5>
                                    <div id="medallion_pic"></div>
                                </div>
                                <div className="additional_section">
                                    <h4>Mission Highlights</h4>
                                    {/* <h5>Plugs Out Test</h5> */}
                                    <p>Apollo 9 was the first space test of the complete Apollo spacecraft, including the third critical piece of Apollo hardware besides the command and service module and the Saturn V launch vehicle—the lunar module. It was also the first space docking of two vehicles with an internal crew transfer between them. For ten days, the astronauts put both Apollo spacecraft through their paces in Earth orbit, including an undocking and redocking of the LM with the CSM, just as the landing mission crew would perform in lunar orbit. Apollo 9 gave proof that the Apollo spacecraft were up to this critical task, on which the lives of lunar landing crews would depend.
                                </p>
                                    <p>For this and all subsequent Apollo flights, the crews were allowed to name their own spacecraft (the last spacecraft to have been named was Gemini 3). The gangly LM was named Spider, and the CSM was labeled Gumdrop because of the Command Module's shape, and because of the blue wrapping in which the craft arrived at Kennedy Space Center. These names were required as radio call signs when the vehicles flew independently.
                                </p>
                                    {/* <h5>Fire</h5> */}
                                    <p>
                                        Schweickart and Scott performed an EVA—Schweickart checked out the new Apollo spacesuit, the first to have its own life support system rather than being dependent on an umbilical connection to the spacecraft, while Scott filmed him from the Command Module hatch. Schweickart was due to carry out a more extensive set of activities to test the suit, and demonstrate that it was possible for astronauts to perform an EVA from the lunar module to the command module in an emergency, but as he had been suffering from space sickness the extra tests were scratched.
                                    </p>
                                    <p>McDivitt and Schweickart later test-flew the LM, and practiced separation and docking maneuvers in Earth orbit. They flew the LM up to 111 miles (179 km) from Gumdrop, using the engine on the descent stage to propel them originally, before jettisoning it and using the ascent stage to return. This test flight represented the first flight of a crewed spacecraft that was not equipped to reenter the Earth's atmosphere.</p>

                                    <p>
                                        The splashdown point was 23°15′N, 67°56′W, 160 nautical miles (290 km) east of the Bahamas and within sight of the recovery ship USS Guadalcanal. Apollo 9 was the last spacecraft to splash down in the Atlantic Ocean. The Saturn IVB third stage became a derelict object where it would continue to orbit the Sun for many years. As of November 2014, it remains in orbit.
                                </p>
                                </div>

                                <div id="launch_pic" className="last_section">

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
                                        <div>Commander</div>
                                        <div>Command Module Pilot</div>
                                        <div>Lunar Module Pilot</div>
                                    </div>
                                    <div>
                                        <h4>Astronaut</h4>
                                        <div>Thomas P. Stafford</div>
                                        <div>John W. Young</div>
                                        <div>Eugene A. Cernan</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mission_overview">
                                <h2>Basic Overview</h2>
                                Apollo 10 was the fourth manned mission in the United States Apollo space program, and the second (after Apollo 8) to orbit the Moon. Launched on May 18, 1969, it was the F mission: a "dress rehearsal" for the first Moon landing, testing all of the components and procedures, just short of actually landing. The Apollo Lunar Module (LM) was flown to a descent orbit within 8.4 nautical miles (15.6 km) of the lunar surface, at the point where powered descent for landing would normally begin. Its success enabled the first landing to be attempted on the Apollo 11 mission two months later. According to the 2002 Guinness World Records, Apollo 10 set the record for the highest speed attained by a manned vehicle: 39,897 km/h (11.08 km/s or 24,791 mph) on May 26, 1969, during the return from the Moon. The mission's call signs were the names of the Peanuts characters Charlie Brown and Snoopy, who became Apollo 10's semi-official mascots. Peanuts creator Charles Schulz also drew some mission-related artwork for NASA.
                            </div>
                            <div className="modal_accent_line"></div>
                            <div className="story_info_container">


                                <div className="background_section">
                                    <h4>Objectives</h4>
                                    <p>
                                        This dress rehearsal for a Moon landing brought the Apollo Lunar Module to 8.4 nautical miles (15.6 km) from the lunar surface, at the point where powered descent would begin on the actual landing. Practicing this approach orbit would refine knowledge of the lunar gravitational field needed to calibrate the powered descent guidance system to within 1 nautical mile (1.9 km) needed for a landing. Earth-based observations, unmanned spacecraft, and Apollo 8 had respectively allowed calibration to within 200 nautical miles (370 km), 20 nautical miles (37 km), and 5 nautical miles (9.3 km). Except for this final stretch, the mission was designed to duplicate how a landing would have gone, both in space and for ground control, putting NASA's flight controllers and extensive tracking and control network through a rehearsal.
                                </p>
                                    <p>
                                        The ascent stage was loaded with the amount of fuel and oxidizer it would have had remaining if it had lifted off from the surface and reached the altitude at which the Apollo 10 ascent stage fired. The mission-loaded LM weighed 30,735 pounds (13,941 kg), compared to 33,278 pounds (15,095 kg) for the Apollo 11 LM which made the first landing. Craig Nelson wrote in his book Rocket Men that NASA took special precaution to ensure Stafford and Cernan would not attempt to make the first landing. Nelson quoted Cernan as saying <h6>"A lot of people thought about the kind of people we were: 'Don't give those guys an opportunity to land, 'cause they might!' So the ascent module, the part we lifted off the lunar surface with, was short-fueled. The fuel tanks weren't full. So had we literally tried to land on the Moon, we couldn't have gotten off."</h6>
                                    </p>
                                </div>
                                <div className="additional_section">
                                    <h4>Mission Highlights</h4>
                                    {/* <h5>Plugs Out Test</h5> */}
                                    <p>Shortly after trans-lunar injection, Young performed the transposition, docking, and extraction maneuver, separating the command and service module (CSM) from the S-IVB stage, turning around, and docking its nose to the top of the lunar module (LM), before separating from the S-IVB. Apollo 10 was the first mission to carry a color television camera inside the spacecraft, and made the first live color TV transmissions from space.
                                </p>
                                    <p>After reaching lunar orbit three days later, Young remained in the command module (CM) Charlie Brown while Stafford and Cernan entered the LM Snoopy and flew it separately. The LM crew performed the descent orbit insertion maneuver by firing their descent engine, and tested their craft's landing radar as they approached the 50,000-foot (15,000-meter) altitude where powered descent would begin on Apollo 11. They surveyed the landing site in the Sea of Tranquility, then separated the descent stage and fired the ascent engine to return to Charlie Brown. The descent stage was left in orbit, but eventually crashed onto the lunar surface because of the Moon's non-uniform gravitational field; its location was not tracked.
                                </p>
                                    {/* <h5>Fire</h5> */}
                                    <p>
                                        Upon descent stage separation and ascent engine ignition, the lunar module began to roll violently because the crew accidentally duplicated commands into the flight computer which took the LM out of abort mode, the correct configuration for this maneuver. The live network broadcasts caught Cernan and Stafford uttering several expletives before regaining control of the LM. Cernan has said he observed the horizon spinning eight times over, indicating eight rolls of the spacecraft under ascent engine power. While the incident was downplayed by NASA, the roll was just several revolutions from being unrecoverable, which would have resulted in the LM crashing into the lunar surface.
                                    </p>

                                    <p>
                                        After being jettisoned, Snoopy's ascent stage engine was fired to fuel depletion, sending it on a trajectory past the Moon into a heliocentric orbit. The Apollo 11 ascent stage was left in lunar orbit to eventually crash; all subsequent ascent stages were intentionally steered into the Moon to obtain readings from seismometers placed on the surface, except for the one on Apollo 13, which did not land but was used as a "life boat" to get the crew back to Earth, and burned up in Earth's atmosphere. Snoopy's ascent stage orbit was not tracked after 1969, and its current location is unknown. In 2011, a group of amateur astronomers in the UK started a project to search for it. It is the only once-manned spacecraft still in outer space without a crew.
                                    </p>
                                    <p>After Apollo 10, NASA required astronauts to choose more "dignified" names for their command and lunar modules. This proved unenforceable: Apollo 16 astronauts Young, Mattingly and Duke chose Casper, as in Casper the Friendly Ghost, for their command module name. The idea was to give children a way to identify with the mission by using humor.
                                </p>
                                </div>

                                <div className="last_section">
                                    <h4>"Space Music" Mystery</h4>
                                    <p>
                                        In February 2016 Discovery Channel broadcast a TV show suggesting that the mission witnessed mysterious or alien signals while on the far side of the Moon. The astronomers mention the odd whistling sound that lasted nearly an hour. It was speculated that this is an evidence for UFO coverup. According to space journalist James Oberg, the sound was most probably radio interference between the command module and the lunar module landing vehicles. Describing it as "outer-space type music" was most probably due to priming, as suggested by Benjamin Radford.
                                </p>
                                    <h4>Earthrise from the moon</h4>
                                    <video width="500" controls>
                                        <source src="../../assets/videos/Apollo_10_Earthrise.mp4" type="video/mp4"></source>
                                    </video>
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
                                        <div>Commander</div>
                                        <div>Command Module Pilot</div>
                                        <div>Lunar Module Pilot</div>
                                    </div>
                                    <div>
                                        <h4>Astronaut</h4>
                                        <div>Neil A. Armstrong</div>
                                        <div>Michael Collins</div>
                                        <div>Edwin "Buzz" E. Aldrin Jr.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mission_overview">
                                <h2>Basic Overview</h2>
                                Apollo 11 was the spaceflight that landed the first two people on the Moon. Commander Neil Armstrong and Lunar Module Pilot Buzz Aldrin, both American, landed the Apollo Lunar Module Eagle on July 20, 1969, at 20:17 UTC. Armstrong became the first person to step onto the lunar surface six hours after landing on July 21 at 02:56:15 UTC; Aldrin joined him about 20 minutes later. They spent about two and a quarter hours together outside the spacecraft, and collected 47.5 pounds (21.5 kg) of lunar material to bring back to Earth. Command Module Pilot Michael Collins piloted the command module Columbia alone in lunar orbit while they were on the Moon's surface. Armstrong and Aldrin spent 21.5 hours on the lunar surface before rejoining Columbia in lunar orbit.
                            </div>
                            <div className="modal_accent_line"></div>
                            <div className="story_info_container">


                                <div className="background_section">
                                    <h4>Personnel</h4>
                                    <p>
                                        Apollo 11 was the second American mission where all the crewmembers had prior spaceflight experience, the first being Apollo 10. The next was STS-26 in 1988. The Apollo 11 prime crew had none of the close cheerful camaraderie that characterized that of Apollo 12. Instead they forged an amiable working relationship. Armstrong in particular was notoriously aloof, but Collins, who considered himself a loner, confessed to rebuffing Aldrin's attempts to create a more personal relationship. Collins recalled a lone unfortunate incident in which Armstrong crashed the lunar module in a simulation, leaving both Armstrong and Aldrin indignant and embarrassed. A heated discussion followed that evening, fueled by Aldrin's fondness for Scotch, but the next morning everything was back to normal and neither was perturbed.


                                </p>
                                    <h4>Site Selection</h4>
                                    <p>
                                        NASA's Apollo Site Selection Board announced five potential landing sites on February 8, 1968. These were the result of two years' worth of studies based on high-resolution photography of the lunar surface by the five unmanned probes of the Lunar Orbiter program and information about surface conditions provided by the Surveyor program. The best Earth-bound telescopes could not resolve features with the resolution Project Apollo required.[60] The landing site had to be close to the lunar equator to minimize the amount of propellant required; clear of obstacles to minimize maneuvering, and flat to simplify the task of the landing radar. Scientific value was not a consideration.
                                    </p>
                                    <p>
                                        Areas that appeared promising on photographs taken on Earth were often found to be totally unacceptable. The original requirement that the site be free of craters had to be relaxed, as no such site was found. Five sites were considered: Sites 1 and 2 were in the Sea of Tranquility (Mare Tranquilitatis); Site 3 was in the Central Bay (Sinus Medii); and Sites 4 and 5 were in the Ocean of Storms (Oceanus Procellarum).
                                </p>
                                </div>
                                <div className="additional_section">
                                    <h4>First Step Decision</h4>
                                    {/* <h5>Plugs Out Test</h5> */}
                                    <p>During the first press conference after the Apollo 11 crew was announced, the first question a reporter asked was, "Which one of you gentlemen will be the first man to step onto the lunar surface?" Slayton told the reporter that it had not been decided, and Armstrong added that it was "not based on individual desire". The media accused Armstrong of exercising his commander's prerogative to exit the spacecraft first. Chris Kraft revealed in his 2001 autobiography that a meeting occurred between Gilruth, Slayton, Low, and himself to make sure Aldrin would not be the first to walk on the Moon. They argued that the first person to walk on the Moon should be like Charles Lindbergh, a calm and quiet person. They made the decision to change the flight plan so the commander was the first to egress from the spacecraft.
                                </p>
                                    <h4 className="reduce_leading">Mission</h4>
                                    <p>
                                        An estimated one million spectators watched the launch of Apollo 11 from the highways and beaches in the vicinity of the launch site. Dignitaries included the Chief of Staff of the United States Army, General William Westmoreland, four cabinet members, 19 state governors, 40 mayors, 60 ambassadors and 200 congressmen. Vice President Spiro Agnew viewed the launch with the former president, Lyndon B. Johnson and his wife Lady Bird Johnson. Around 3,500 media representatives were present. About two-thirds were from the United States; the rest came from 55 other countries. The launch was televised live in 33 countries, with an estimated 25 million viewers in the United States alone. Millions more around the world listened to radio broadcasts. President Richard Nixon viewed the launch from his office in the White House with his NASA liaison officer, Apollo astronaut Frank Borman.
                                </p>
                                    {/* <h5>Fire</h5> */}
                                    <p>
                                    Throughout the descent to the moon's surface, Aldrin called out navigation data to Armstrong, who was busy piloting Eagle. Now 107-foot (33 m) above the surface, Armstrong knew their propellant supply was dwindling and was determined to land at the first possible landing site. Preparations for the EVA began at 23:43. These took longer than expected; three and a half hours instead of two. During training on Earth, everything required had been neatly laid out in advance, but on the Moon the cabin contained a large number of other items as well, such as checklists, food packets and tools. Once Armstrong and Aldrin were ready to go outside, Eagle was depressurized. The hatch was opened at 02:39:33.
                                    </p>
                                    <p>In a 2010 interview, Armstrong explained that NASA limited the first moonwalk's time and distance because there was no empirical proof of how much cooling water the astronauts' PLSS backpacks would consume to handle their body heat generation while working on the Moon</p>
                                    <h6 className="small_paragraph_space reduce_line_height">"Thank you, Mr. President. It's a great honor and privilege for us to be here, representing not only the United States, but men of peace of all nations, and with interest and curiosity, and men with a vision for the future. It's an honor for us to be able to participate here today."</h6>
                                </div>

                                <div className="last_section reduce_line_height">
                                    <h4>Return</h4>
                                    <p >On July 23, the last night before splashdown, the three astronauts made a television broadcast in which Collins commented:</p>

                                    <h6 className="small_paragraph_space">... The Saturn V rocket which put us in orbit is an incredibly complicated piece of machinery, every piece of which worked flawlessly ... We have always had confidence that this equipment will work properly. All this is possible only through the blood, sweat, and tears of a number of people ... All you see is the three of us, but beneath the surface are thousands and thousands of others, and to all of those, I would like to say, "Thank you very much."</h6>

                                    <p className="small_paragraph_space">Aldrin added:</p>

                                    <h6 className="small_paragraph_space">This has been far more than three men on a mission to the Moon; more, still, than the efforts of a government and industry team; more, even, than the efforts of one nation. We feel that this stands as a symbol of the insatiable curiosity of all mankind to explore the unknown ... Personally, in reflecting on the events of the past several days, a verse from Psalms comes to mind. "When I consider the heavens, the work of Thy fingers, the Moon and the stars, which Thou hast ordained; What is man that Thou art mindful of him?"</h6>

                                    <p className="small_paragraph_space">Armstrong concluded:</p>

                                    <h6 className="small_paragraph_space">"The responsibility for this flight lies first with history and with the giants of science who have preceded this effort; next with the American people, who have, through their will, indicated their desire; next with four administrations and their Congresses, for implementing that will; and then, with the agency and industry teams that built our spacecraft, the Saturn, the Columbia, the Eagle, and the little EMU, the spacesuit and backpack that was our small spacecraft out on the lunar surface. We would like to give special thanks to all those Americans who built the spacecraft; who did the construction, design, the tests, and put their hearts and all their abilities into those craft. To those people tonight, we give a special thank you, and to all the other people that are listening and watching tonight, God bless you. Good night from Apollo 11."</h6>

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
