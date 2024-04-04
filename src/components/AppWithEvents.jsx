import { useState } from "react";

export default function AppWithEvents(){
    const [color, setColor] = useState("#fff");
    const [temperature, setTemperature] = useState(0);
    function handleColorChange(event) {
        console.log(event);
        const newColor = event.target.value;
        setColor(newColor);
    }
    function handleTemperatureChange(event) {
        const newTemperature = event.target.value;
        setTemperature(newTemperature);
    }
    function celsiusToFahrenheit(celsius) {
        return celsius * 1.8 + 32;
    }

    return (
        
        <div className="App" style={{backgroundColor: color}}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, perferendis?</p>
            <button onClick={() => { console.log('clicked!'); }}>Click me !</button>
            <input type="color" onChange={handleColorChange} />
            <hr/>
            <label>Temperatura in grade Celsius</label>
            <input type="text" value={ temperature} onChange={handleTemperatureChange } />
            <div>Temperatura calculate in grade Fahrenheit este:{celsiusToFahrenheit(temperature) }</div>
        </div>
    )
}