import React from 'react'
import ReactDOM from 'react-dom'

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
        </div>
    )
  }
})

ReactDOM.render(
    <ComplimentMachine compliment="Your smile is awesome"/>,
    document.getElementById('root')
)

console.log('welcome to compliment thing')
