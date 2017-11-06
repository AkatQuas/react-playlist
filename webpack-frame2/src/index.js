import React from 'react'
import {render} from 'react-dom'

import {ActivityCountClass} from "./components/ActivityCount-createReactClass"
import routes from './components/routes'

window.React = React
if (true) {

    render(
        routes,
        document.querySelector('#root')
    )
}
if (false) {
    render(
        <ActivityCountClass/>,
        document.querySelector('#root')
    )

}
