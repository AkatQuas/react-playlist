import React from "react";
import PropTypes from "prop-types";


const GamesList = ({ games }) => {
    const empty = (<p>You don't have any games in your collection.</p>)
    const list = (
        <div>
            {games.map(i => ( <p key={i.title}>game {i.title} </p> ))}
        </div>
    )
    return (
        <div>
            {games.length <= 0 ? empty : list }
        </div>
    )
}

GamesList.propTypes = {
    games: PropTypes.array.isRequired
}

export default GamesList;