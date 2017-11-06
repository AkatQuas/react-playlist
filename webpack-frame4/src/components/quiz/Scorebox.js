import React from 'react'

class Scorebox extends React.Component {
    render() {
        return (
            <div>
                Question {this.props.current} out of {this.props.questions.length}. Your
                <span><strong>Score: {this.props.score}</strong></span>
            </div>
        )
    }
}

export default Scorebox