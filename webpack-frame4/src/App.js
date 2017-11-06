import React, {Component} from 'react'
import questions from './mockdata/questions'
import QuestionList from './components/quiz/QuestionList'
import Scorebox from './components/quiz/Scorebox'
import Results from './components/quiz/Results'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questions,
            score: 0,
            current: 1
        }
    }

    setCurrent(current) {
        this.setState({current})
    }
    setScore(score) {
        this.setState({score})
    }
    render() {
        let scorebox = '';
        let results = '';
        if  (this.state.current > this.state.questions.length) {
            results = <Results {...this.state}/>
        } else {
            scorebox = <Scorebox {...this.state}/>
        }
        return (
            <div>
                {scorebox}
                <QuestionList
                    {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)}/>
                {results}
            </div>
        )
    }
}

export default App
