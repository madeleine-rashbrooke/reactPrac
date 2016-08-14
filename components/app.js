import React, { Component } from 'react'

var ComplimentMachine = React.createClass ({
  getInitialState: function(){
    return {
        name: ''
    }
  },

  handleChange: function (e) {
    this.setState({
        name: e.target.value
    })
  },

  render: function () {
    return (
        <div>
            <h1>What is your name?</h1>
            <input type= "text" onChange={this.handleChange} />
            <p>{this.props.compliment}, {this.state.name}</p>
            <h1>Welcome to {this.props.name}</h1>
        </div>
    )
  }
})

export default ComplimentMachine
