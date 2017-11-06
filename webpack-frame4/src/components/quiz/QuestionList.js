import React from 'react'

class Question extends React.Component {

    onChange(e) {
        e.preventDefault()
        const {setCurrent, setScore, question } = this.props
        console.log(this)
        let selected = e.target.value;
        if (selected === question.correct) {
            setScore(this.props.score+1);
        }
        setCurrent(this.props.current+1);
    }
    render() {
        const {question} = this.props
        return (
            <div>
                <h3>{question.text}</h3>
                <hr/>
                <ul>
                    {question.choices.map(choice => {
                        return (
                            <li key={choice.id}>
                                {choice.id} <input type="radio" onChange={this.onChange.bind(this)} name={question.id} value={choice.id}/> {choice.text}
                            </li>
                        )
                    })}
                </ul>
            </div>

        )
    }
}

class QuestionList extends React.Component {
    render() {
        return (
            <div>
                {this.props.questions.map(question => (question.id === this.props.current) ? <Question question={question}
                                                                key={question.id} {...this.props} /> : '')}
            </div>
        )
    }
}

export default QuestionList
