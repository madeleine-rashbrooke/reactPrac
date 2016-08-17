import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const thingthing = {
    temperature: 42
}


ReactDOM.render(
    <App data={thingthing}/>,
    document.getElementById('root')
)

console.log('welcome to compliment thing')

