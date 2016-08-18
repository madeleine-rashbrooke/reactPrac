import React, { Component } from 'react'

export default React.createClass ({
  getInitialState (){
    return {
        color: "blue",
        location: "Timbuktoo"
    }
  },

//me hacking away to start seeing if you could grab a colour from the text box
//and use it to direct the colour change - didn't finish doing this...
  handleColorInput (e) {
    this.setState({
        color: e.target.value
    })
    console.log("this is the new colour: ", this.state.color)
  },

//this bit doesn't seem to work - is activated on click though...
  changeTitleColor () {
    console.log("have activated title colour changer!")
    this.props.colorChanger("red") // what does this do???????????
  },

  render () {
    return (
        <div>
            <h1 className={this.state.color}>And here is the weather...</h1>
            <h2>{this.props.temp} degrees</h2>
             <h1 onClick={this.changeTitleColor}>Click to change color</h1>
            <input type= "text" onChange={this.handleColorInput}/>
            <p>Hacking to show what ends up in these 'boxes': {this.props.welcome}, you're in {this.state.location} </p>
        </div>
    )
  }
})
