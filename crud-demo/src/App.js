import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import GamesPage from "./components/games.page";
import GamesForm from "./components/games-form.page";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <span style={{ border: '1px solid', borderRadius: '5px', color: 'red', padding: '6px', margin:'10px' }}>

                        <Link to="/">Home</Link>
                    </span>
                    <span style={{ border: '1px solid', borderRadius: '5px', color: 'red', padding: '6px', margin:'10px'  }}>

                        <Link to="/games">Games</Link>
                    </span>
                    <span style={{ border: '1px solid', borderRadius: '5px', color: 'red', padding: '6px', margin:'10px'  }}>

                        <Link to="/games/new">Add New Game</Link>
                    </span>
                </div>
                <hr/>
                <Route path="/games" exact component={GamesPage} />
                <Route path="/games/new" component={GamesForm} />
            </div>
        );
    }
}

export default App;
