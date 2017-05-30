import React, { Component } from 'react';
import './App.css';
import chien from "./chien.jpeg";
import baleine from "./baleine.jpeg";
import singe from "./singe.jpg";
import lion from "./lion.jpg";
import poisson from "./posson.jpg";

let images = [chien,
    baleine,
    singe,
    lion,
    poisson,
]

let game= [0,1,2,3,4,2,3,4,2,1,0,2,0, 3, 4, 1];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            started: false,
            index: 0,
            timer: 0,
            finished:false,
        };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            100
        );
    }

    tick() {
        if(this.state.started && !this.state.finished)
            this.setState((prevState) => {timer: prevState.timer+0.1})
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    CentralComponent() {
        if(this.state.started && !this.state.finished) {
            return (
                <div>
                    <img className="Image" alt="lul" src={images[game[this.state.index]]}/>
                    <div>
                        <button onClick={()=> {
                            if (this.state.index >= 15) {
                                this.setState({finished:true, index: 0, timer:this.state.timer+5});
                                return;
                            }
                            this.setState({index: this.state.index+1,
                                timer: this.state.timer+5})
                        }
                        }>
                            Passer (+5 secondes)
                        </button>
                    </div>
                    <h2>{this.state.timer.toFixed(1)}</h2> <p>(On peut le cacher)</p>
                </div>
            );
        }
        else if (!this.state.finished) {
            return (
                <div>
                    <p className="App-intro">
                        Ready ?
                    </p>
                    <button onClick={()=>this.setState({started: true})}>Click here</button>
                </div>
            );
        }
        else {
            return (
                <div>
                    <h1>{this.state.timer.toFixed(1)}</h1>
                    <h2>T'es vraiment pas très bon</h2>
                    <button onClick={()=>this.setState(
                        {timer:0, finished:false}
                    )}>
                        Réessaye
                    </button>
                </div>
            );
        }
    }
    menuOnClick(num) {
        if(this.state.finished || !this.state.started)
            return;
        if (game[this.state.index] === num) {
            if (this.state.index >= 15) {
                this.setState({finished:true, index: 0});
                return;
            }
            this.setState((prevState) => {index:prevState.index+1});
        }
        else
            this.setState((prevState) => {timer: prevState.timer + 10});
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <ul>
                        <li className="dropdown">
                            <a className="dropbtn">Petit</a>
                            <div className="dropdown-content">
                                <a onClick={()=>this.menuOnClick(-1)}>Chat</a>
                                <a onClick={()=>this.menuOnClick(0)}>Chien</a>
                                <a onClick={()=>this.menuOnClick(2)}>Singe</a>
                                <a onClick={()=>this.menuOnClick(4)}>Poisson Rouge</a>
                                <a onClick={()=>this.menuOnClick(-1)}>Aloïs Pourchot</a>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a className="dropbtn">Gros</a>
                            <div className="dropdown-content">
                                <a onClick={()=>this.menuOnClick(1)}>Baleine</a>
                                <a onClick={()=>this.menuOnClick(3)}>Lion</a>
                                <a onClick={()=>this.menuOnClick(-1)}>Tigre</a>
                            </div>
                        </li>
                    </ul>
                </div>
                {this.CentralComponent()}
            </div>
        );
    }
}

export default App;
