import React from 'react';
import NavLink from './NavLink';
import { browserHistory } from 'react-router';

class Repos extends React.Component {
    handleSubmit(event) {
        console.log(this);
        event.preventDefault();
        console.log(event.target.elements)
        const username = event.target.elements[0].value;
        const repo = event.target.elements[1].value;
        const path = `/repos/${username}/${repo}`; 
        console.log(path);
        // browserHistory.replace(path);
        // browserHistory.push(path);
    }
    render () {
        return <div>Repos

            <ul>
                <li>
                    <NavLink to="/repos/reactjs/react-router" >React Router</NavLink>
                </li>
                <li>
                    <NavLink to="/repos/facebook/react" >React</NavLink>
                </li>
                <li>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="userName" /> / { ' ' }
                        <input type="text" placeholder="repo" /> { ' ' }
                        <button type="submit">Go</button>
                    </form>
                </li>
            </ul>

            {this.props.children}
        </div>;
    }
}

export default Repos;