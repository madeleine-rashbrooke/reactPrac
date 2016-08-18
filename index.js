import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const fixedTemp = {
    temperature: 25
}


ReactDOM.render(
    <App data={fixedTemp}/>,
    document.getElementById('root')
)

console.log('welcome to compliment thing')
