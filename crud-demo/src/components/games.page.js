import React from 'react';
import GamesList from "./games-list";
import { connect } from "react-redux";
import { fetchGames } from "../store/actions";
import PropTypes from "prop-types";

class GamesPage extends React.Component {
    componentDidMount() {
        this.props.fetchGames();
    }
    render() {
        return (
            <div>
                <h1>Games List</h1>
                <GamesList games={this.props.games} />
            </div>
        )
    }
}

GamesPage.propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    games: state.games
})

export default connect(mapStateToProps, { fetchGames })(GamesPage);