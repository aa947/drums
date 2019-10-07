import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";


const bankOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];


const bankTwo = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];

const activeStyle = {
    backgroundColor: 'orange',
    boxShadow: "0 3px orange",
    height: 77,
    marginTop: 13
}

const inactiveStyle = {
    backgroundColor: 'grey',
    marginTop: 10,
    marginRight: 10,
    // margin:'1% 1%',
    boxShadow: "3px 3px 5px black"
}
const container_style = {
    width: '100%'
}

const widget_style = {
    display: 'inline'
}


class Drums extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };


    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }


    render() {
        return (
            <div style={container_style}>
                <h1> Drums </h1>
                <div className="container" >
                    <div className="row">
                        <div className="col-md-1" style={inactiveStyle}>Q</div>
                        <div className="col-md-1" style={inactiveStyle}>W</div>
                        <div className="col-md-1" style={inactiveStyle}>E</div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6"   >
                            <div className="col-md-1" style={widget_style} > Power </div>
                            <div className="col-md-1" style={widget_style} >
                                <label className="switch"> <input type="checkbox"></input><span className="slider"></span>
                                </label></div>
                            <div className="col-md-1" style={widget_style} >Bank</div>
                            <div className="col-md-1" style={widget_style}>
                                <label className="switch"> <input type="checkbox"></input><span className="slider"></span>
                                </label></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1" style={inactiveStyle}>A</div>
                        <div className="col-md-1" style={inactiveStyle}>S</div>
                        <div className="col-md-1" style={inactiveStyle}>D</div>
                        <div className="col-md-2" ></div>
                        <div className="col-md-4" style={inactiveStyle}  >  </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1" style={inactiveStyle}>Z</div>
                        <div className="col-md-1" style={inactiveStyle}>X</div>
                        <div className="col-md-1" style={inactiveStyle}>C</div>
                        <div className="col-md-2"></div>
                        <div className="col-md-4 slidecontainer" style={{ marginTop: '1%' }}  >  <input type="range" min="1" max="100" value="50" className="slider1" id="myRange" ></input> </div>
                    </div>
                </div>
            </div>
        );
    }
};



export default Drums;