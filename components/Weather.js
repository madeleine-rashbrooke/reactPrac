import React, { Component } from 'react'

export default React.createClass ({
  getInitialState (){
    return {
        color: "blue"
    }
  },

  changeTitleColor () {
    this.props.colorChanger("red")
  },

  render () {
    return (
        <div>
            <h1 className={this.state.color}>here is the weather</h1>
            {this.props.temp} degrees
             <h1 onClick={this.changeTitleColor}>Click to change color</h1>
            <input type= "text" />
            <p>{this.props.welcome}, {this.state.location} </p>
        </div>
    )
  }
})