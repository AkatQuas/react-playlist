import React from 'react'
import {render} from 'react-dom'
import {hello, goodbye} from "./lib"

const style = {
    backgroundColor: 'red',
    color: '#6cf',
    fontFamily: 'verdana'
}
const title = React.createElement(
    'h1',
    {id: 'title', className: 'header', style: style},
    'Hello world take the day off!'
)
render(
    <div>
        {hello}
        {goodbye}
    </div>,
    document.getElementById('root')
);
