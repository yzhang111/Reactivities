import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button } from 'semantic-ui-react'

const e = React.createElement
const domContainer = document.querySelector('#like_button_container')
const root = ReactDOM.createRoot(domContainer)

root.render(e(Button, { primary: true }, 'Hello world!'))