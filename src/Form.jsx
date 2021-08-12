import React, {  Fragment } from "react"

class Form extends React.Component {
state={
    fahrenheit: 0,
    fahrenheitToCelsiusConversion:0,
    celsius:0,
    celsiusToFahrenheitConversion:0
}
onChange = (e) =>{
let target = e.target;
let {id,value} = target;

this.setState((prevState)=>{
  return {...prevState, [id]:value}
})
}
onConvertFahrenheit=(e)=>{
e.preventDefault()
let fahrenheitToCelsiusConversion = parseInt((this.state.fahrenheit - 32) * 5 / 9);
console.log(fahrenheitToCelsiusConversion)

this.setState((prevState)=>{
return {...prevState.fahrenheitToCelsiusConversion, fahrenheitToCelsiusConversion}
})
}

onConvertCelsius=(e)=>{
    e.preventDefault()
    let celsiusToFahrenheitConversion = parseInt((this.state.celsius * 9 / 5) + 32);
    console.log(celsiusToFahrenheitConversion)
    
    this.setState((prevState)=>{
    
    return {...prevState.celsiusToFahrenheitConversion, celsiusToFahrenheitConversion}
    })
    }

  




render()
{

return(
    <Fragment>
        <form>
            <label>Fahrenheit </label>
            <input id="fahrenheit" value={this.state.fahrenheit} onChange={this.onChange}></input>
            <button onClick={this.onConvertFahrenheit}> Convert to celisus</button>
            <label> Celsius </label>
            <input id="celsius" value={this.state.celsius} onChange={this.onChange}></input>
            <button onClick={this.onConvertCelsius}> Convert to fahrenheit</button>
        </form>
        <div>
            <ul style={{listStyle:"none"}}>
                <li>{this.state.celsiusToFahrenheitConversion ? `Celsius conversion result ${this.state.celsiusToFahrenheitConversion}` : null}</li>
                <li>{this.state.fahrenheitToCelsiusConversion ? `Fahrenheit conversion result ${this.state.fahrenheitToCelsiusConversion}` : null}</li>
            </ul>


        </div>
       

    </Fragment>
)

}



}

export default Form;