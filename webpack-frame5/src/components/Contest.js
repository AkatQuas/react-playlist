import React from 'react'
import PropTypes from 'prop-types'

class Contest extends React.Component {
    render () {
        return (
            <div className="contest">
                <div className="contest-description">
                    {this.props.id}
                    {this.props.description}
                </div>
                <div className="home-link link" onClick={this.props.contestListClick}>
                    ContestList
                </div>
            </div>
        )
    }
}

Contest.propTypes = {
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    contestListClick: PropTypes.func.isRequired
}

export default Contest
