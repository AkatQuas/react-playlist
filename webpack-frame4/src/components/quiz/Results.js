import React from 'react'

class Results extends React.Component {
    render() {
        const percent = this.props.score / this.props.questions.length * 100
        let message = '';
        if (percent > 80) {
            message = 'Awesome'
        } else if (percent < 80 && percent > 60) {
            message = "not bad"
        } else if (percent < 80 && percent > 60) {
            message = "you bad"
        }
        return (
            <div>
                <h4>You got {this.props.score} out of {this.props.questions.length} correct!</h4>
                <h4>{percent}% - {message}</h4>
                <a href="/">Take again</a>
            </div>
        )
    }
}

export default Results