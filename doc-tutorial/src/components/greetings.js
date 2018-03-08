import React from 'react';
const Welcome = props => <p> Hello <span style = { { color: 'red' } }> { props.name } </span></p>
export default _ => {
    const guys = ['Sara', 'Cahal', 'Edite'];
    return guys.map(name => <Welcome name = { name } key = { name } />)
}