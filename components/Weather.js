import React, { Component } from 'react'

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
            <h1>here is the weather</h1>
            {this.props.temp} degrees
        </div>
    )
  }
})