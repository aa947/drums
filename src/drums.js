import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import 'rangeslider.js';


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
            status: "on",
            bank : "one"

        };

        this.play = this.play.bind(this);
        this.onoff = this.onoff.bind(this);
        this.bank = this.bank.bind(this);
        this.volume = this.volume.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    onoff() {
        //let status = event.target.value;
        //console.log(status);
        if(this.state.status === "off"){ return this.setState({ status :"on"}) }
        if(this.state.status === "on"){ return this.setState({ status :"off"}) }
    }

    bank(){
        if(this.state.bank === "one"){ return this.setState({ bank :"two"}) }
        if(this.state.bank === "two"){ return this.setState({ bank :"one"}) }
    }

    volume(){
        let vol = $('#myRange')[0].value/100;
        console.log(vol);
        let el = $('audio');
        console.log(el)
        $('Audio').volume = vol;
    }


    play(event) {

        //console.log(event.target);
    let tar = event.target.id;
    let key = event.target.keyCode;
    console.log(key);
    console.log(event)
    if(this.state.status === "on"){  
        if (this.state.bank === "one"){  
        if (tar === "Q" || key == 81) {
            let elem = bankOne[0];
            //console.log(elem);
            var audio = new Audio(elem.url);
            audio.play();
            $('#show').html('<p>'+ elem.id +'</p>');

        }
        if (tar === "W") {
            let elem = bankOne[1];
            //console.log(elem);
            var audio = new Audio(elem.url);
            audio.play();
            $('#show').html('<p>'+ elem.id +'</p>');
        }
        if (tar === "E") {
            let elem = bankOne[2];
            //console.log(elem);
            var audio = new Audio(elem.url);
            audio.play();
            $('#show').html('<p>'+ elem.id +'</p>');

        }
        if (tar === "A") {
            let elem = bankOne[3];
            //console.log(elem);
            var audio = new Audio(elem.url);
            audio.play();
            $('#show').html('<p>'+ elem.id +'</p>');
        }
        if (tar === "S") {
            let elem = bankOne[4];
            //console.log(elem);
            var audio = new Audio(elem.url);
            audio.play();
            $('#show').html('<p>'+ elem.id +'</p>');
        }
        if (tar === "D") {
            let elem = bankOne[5];
            //console.log(elem);
            var audio = new Audio(elem.url);
            audio.play();
            $('#show').html('<p>'+ elem.id +'</p>');
        }
        if (tar === "Z") {
            let elem = bankOne[6];
            //console.log(elem);
            var audio = new Audio(elem.url);
            audio.play();
            $('#show').html('<p>'+ elem.id +'</p>');
        }if (tar === "X") {
            let elem = bankOne[7];
            //console.log(elem);
            var audio = new Audio(elem.url);
            audio.play();
            $('#show').html('<p>'+ elem.id +'</p>');
        }if (tar === "C") {
            let elem = bankOne[8];
            //console.log(elem);
            var audio = new Audio(elem.url);
            audio.play();
            $('#show').html('<p>'+ elem.id +'</p>');
        }


    } //end of bankone


    if (this.state.bank === "two"){  
        if (tar === "Q") {
            let elem = bankTwo[0];
            //console.log(elem);
            var audio = new Audio(elem.url);
            audio.play();
            $('#show').html('<p>'+ elem.id +'</p>');
        }
        if (tar === "W") {
            let elem = bankTwo[1];
            //console.log(elem);
            var audio = new Audio(elem.url);
            audio.play();
            $('#show').html('<p>'+ elem.id +'</p>');
        }
        if (tar === "E") {
            let elem = bankTwo[2];
            //console.log(elem);
            var audio = new Audio(elem.url);
            audio.play();
            $('#show').html('<p>'+ elem.id +'</p>');
        }
        if (tar === "A") {
            let elem = bankTwo[3];
            //console.log(elem);
            var audio = new Audio(elem.url);
            audio.play();
            $('#show').html('<p>'+ elem.id +'</p>');
        }
        if (tar === "S") {
            let elem = bankTwo[4];
            //console.log(elem);
            var audio = new Audio(elem.url);
            audio.play();
            $('#show').html('<p>'+ elem.id +'</p>');
        }
        if (tar === "D") {
            let elem = bankTwo[5];
            //console.log(elem);
            var audio = new Audio(elem.url);
            audio.play();
            $('#show').html('<p>'+ elem.id +'</p>');
        }
        if (tar === "Z") {
            let elem = bankTwo[6];
            //console.log(elem);
            var audio = new Audio(elem.url);
            audio.play();
            $('#show').html('<p>'+ elem.id +'</p>');
        }if (tar === "X") {
            let elem = bankTwo[7];
            //console.log(elem);
            var audio = new Audio(elem.url);
            audio.play();
            $('#show').html('<p>'+ elem.id +'</p>');
        }if (tar === "C") {
            let elem = bankTwo[8];
            //console.log(elem);
            var audio = new Audio(elem.url);
            audio.play();
            $('#show').html('<p>'+ elem.id +'</p>');
        }


    }//end of bank two

  
    } //end of onoff

} //end of function play   

    render() {
        return (
            <div style={container_style}>
                <h1> Drums </h1>
                <div className="container" >
                    <div className="row">
                        <div className="col-md-1" style={inactiveStyle}><button id="Q" onClick={this.play}>Q</button></div>
                        <div className="col-md-1" style={inactiveStyle}><button id="W" onClick={this.play}>W</button></div>
                        <div className="col-md-1" style={inactiveStyle}><button id="E" onClick={this.play}>E</button></div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6"   >
                            <div className="col-md-1" style={widget_style} > Power </div>
                            <div className="col-md-1" style={widget_style} >
                                <label className="switch"> <input type="checkbox" defaultChecked value="on" onChange={this.onoff} ></input><span className="slider"></span>
                                </label></div>
                            <div className="col-md-1" style={widget_style} >Bank 2</div>
                            <div className="col-md-1" style={widget_style}>
                                <label className="switch"> <input type="checkbox" defaultChecked onChange={this.bank}></input><span className="slider"></span>
                                </label></div>
                                <div className="col-md-1" style={widget_style} >Bank 1</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1" style={inactiveStyle}><button id="A" onClick={this.play}>A</button></div>
                        <div className="col-md-1" style={inactiveStyle}><button id="S" onClick={this.play}>S</button></div>
                        <div className="col-md-1" style={inactiveStyle}><button id="D" onClick={this.play}>D</button></div>
                        <div className="col-md-2" ></div>
                        <div id="show" className="col-md-4" style={inactiveStyle}  >  </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1" style={inactiveStyle}><button id="Z" onClick={this.play}>Z</button></div>
                        <div className="col-md-1" style={inactiveStyle}><button id="X" onClick={this.play}>X</button></div>
                        <div className="col-md-1" style={inactiveStyle}><button id="C" onClick={this.play}>C</button></div>
                        <div className="col-md-2"> </div>
                        <div className="col-md-4 slidecontainer" style={{ marginTop: '1%' }}  >  <input type="range" min="1" max="100" onChange={this.volume} n  className="slider1" id="myRange" ></input> </div>
                    </div>
                </div>
            </div>
        );
    }
};



export default Drums;