import React, {useState} from 'react';
import logo from '../../assets/images/logo.svg';
import '../../assets/css/App.css';

function ExampleComponent() {
    const [color, setColor] = useState("red");

    const setBlue = () => setColor("blue");
    const setGreen = () => setColor("green");

    return (
        <div className="App">
            <header className="App-header" style={{backgroundColor: color}}>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                   Managed by local state useState()
                </p>
                <button onClick={setBlue}>{"RED"}</button>
                <button onClick={setGreen}>{"CYAN"}</button>
            </header>
        </div>
    );
}

export default ExampleComponent;
