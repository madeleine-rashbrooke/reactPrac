import React, { Component } from 'react'

var ComplimentMachine = React.createClass ({
  getInitialState (){
    return {
        name: '',
        location: ''
    }
  },

  handleNameChange (e) {
    this.setState({
        name: e.target.value
    })
  },

  handleLocationChange (e) {
    this.setState({
        location: e.target.value
    })
  },

  render () {
    return (
        <div>
            <p>What is your name?</p>
            <input type= "text" onChange={this.handleNameChange} />
            <h2>{this.props.compliment} {this.state.name}</h2>

            <p>Which city are you in?</p>
            <input type= "text" onChange={this.handleLocationChange} />
            <h2>{this.props.welcome} {this.state.location} </h2>
        </div>
    )
  }
})

export default ComplimentMachine
