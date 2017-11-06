import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

render(
    <App initialData={window.initialData} />,
    document.querySelector('#root')
)
