import React, { Component } from 'react'

var ComplimentMachine = React.createClass ({
  getInitialState (){
    return {
        name: '',
        location: ''
    }
  },

  handleChange (e) {
    this.setState({
        name: e.target.value
    })
  },

  locationChange (e) {
    this.setState({
        location: e.target.value
    })
  },

  render () {
    return (
        <div>
            <h1>What is your name?</h1>
            <input type= "text" onChange={this.handleChange} />
            <p>{this.props.compliment}, {this.state.name}</p>

            <h1>Which city are you in?</h1>
            <input type= "text" onChange={this.locationChange} />
            <p>{this.props.welcome}, {this.state.location} </p>
        </div>
    )
  }
})

export default ComplimentMachine
