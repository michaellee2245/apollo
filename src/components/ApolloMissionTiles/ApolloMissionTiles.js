import React, { Component } from 'react';
import './apollo-mission-tiles.scss';

class ApolloMissionTiles extends Component {


    render() {
        return (
            <div className="mission_wrapper">


                <a href="#openModal1"><button className="modal_button">Apollo 01</button></a>

                <div id="openModal1" class="modalDialog">
                    <div>
                        <a href="#close" title="Close" class="close">X</a>
                        <h2>Modal Box 1</h2>
                        <p>This is a sample modal box that can be created using the powers of CSS3.    </p>
                        <p>You could do a lot of things here like have a pop-up ad that shows when your website loads, or create a login/register form for users.</p>
                    </div>
                </div>


                <a href="#openModal2"><button className="modal_button">Apollo 07</button></a>

                <div id="openModal2" class="modalDialog">
                    <div>
                        <a href="#close" title="Close" class="close">X</a>
                        <h2>Modal Box 2</h2>
                        <p><strong>Box 2</strong></p>
                        <p>yadda yadda</p>
                    </div>
                </div>
                <a href="#openModal3"><button className="modal_button">Apollo 07</button></a>

                <div id="openModal3" class="modalDialog">
                    <div>
                        <a href="#close" title="Close" class="close">X</a>
                        <h2>Modal Box 2</h2>
                        <p><strong>Box 3</strong></p>
                        <p>yadda yadda</p>
                    </div>
                </div>
                <a href="#openModal4"><button className="modal_button">Apollo 07</button></a>

                <div id="openModal4" class="modalDialog">
                    <div>
                        <a href="#close" title="Close" class="close">&times;</a>
                        <h2>Modal Box 2</h2>
                        <p><strong>Box 4</strong></p>
                        <p>yadda yadda</p>
                    </div>
                </div>
                <a href="#openModal5"><button className="modal_button">Apollo 07</button></a>

                <div id="openModal5" class="modalDialog">
                    <div className="mission_content">
                        <a href="#close" title="Close" class="close">X</a>
                        <h2>Modal Box 2</h2>
                        <p><strong>Box 5</strong></p>
                        <p>yadda yadda</p>
                    </div>
                </div>
                <a href="#openModal6"><button className="modal_button">Apollo 07</button></a>

                <div id="openModal6" class="modalDialog">
                    <div>
                        <a href="#close" title="Close"><div className="close"></div></a>
                        <h2>Modal Box 2</h2>
                        <p><strong>Box 6</strong></p>
                        <p>yadda yadda</p>
                    </div>
                </div>

            </div>
        )
    }
}
export default ApolloMissionTiles