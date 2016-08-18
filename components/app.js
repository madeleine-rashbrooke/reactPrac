import React, { Component } from 'react'
import ComplimentMachine from "./ComplimentMachine"
import Weather from "./Weather"

var App = React.createClass ({
  getInitialState (){
    return {
        name: '',
        location: '',
        color: "black"
    }
  },

  changeColor (color) {
    this.setState ({
        color: color
    })
  },

  render () {
    return (
      <div>
        <h1 className={this.state.color}>Compliments or Weather</h1>
        <ComplimentMachine compliment="Your smile is awesome" welcome="Enjoy your stay in" />
        <p>----------------------------------------</p>
        <ComplimentMachine compliment="We're lucky to have you" welcome="You'll have lots of fun in" />
        <Weather temp={this.props.data.temperature} colorChanger={this.changeColor}/>
        <p>----------------------------------------</p>
        <Weather temp={this.props.data.temperature - 5} welcome="Howdy pardner" colorChanger={this.changeColor}/>
      </div>
    )
  }
})

export default App
