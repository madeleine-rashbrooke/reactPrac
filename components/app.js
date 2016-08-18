import React, { Component } from 'react'
import ComplimentMachine from "./ComplimentMachine"
import Weather from "./Weather"

export default React.createClass ({
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
        <h1 className={this.state.color}>Compliments and Weather</h1>
        <ComplimentMachine compliment="Your smile is awesome" welcome="Enjoy your stay in" />
        <Weather temp={this.props.data.temperature} colorChanger={this.changeColor}/>
      </div>
    )
  }
})

