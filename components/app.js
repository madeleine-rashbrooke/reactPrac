import React, { Component } from 'react'
import ComplimentMachine from "./ComplimentMachine"
import Weather from "./Weather"

export default React.createClass ({
  getInitialState (){
    return {
        name: '',
        location: ''
    }
  },

  render () {
    return (
      <div>
        <ComplimentMachine compliment="Your smile is awesome" welcome="Enjoy your stay in" />
        <Weather temp={this.props.data.temperature}/>
      </div>

    )
  }
})

