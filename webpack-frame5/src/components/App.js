import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Header from './Header'
import ContestList from './ContestList'
import Contest from './Contest'
import * as api from '../api'

const pushState = (obj, url) => {
    window.history.pushState(obj, '', url)
}

class App extends React.Component {
    static propTypes = {
        initialData: PropTypes.object.isRequired
    }

    constructor (props) {
        super(props)
        this.state = this.props.initialData
    }

    componentDidMount () {
    }

    componentWillUnmount () {
        this.setState({
            contest: []
        })

    }

    pageHeader () {
        if ( this.state.currentContestId ) {
            return this.state.contests[this.state.currentContestId].contestName
        }
        return 'Naming-Contest'
    }

    fetchContest = (contestId) => {
        pushState(
            { currentContestId: contestId },
            `/contest/${contestId}`
        )
        api.fetchContest(contestId).then(contest => {
            this.setState({
                currentContestId: contest.id,
                contests: {
                    ...this.state.contests,
                    [contest.id]: contest
                }
            })
        })
    }
    fetchContestList = () => {
        pushState({ currentContestId: null }, '/')
        api.fetchContestList().then(res => {
            this.setState({
                currentContestId: null,
                contest: res.contests
            })
        })
    }

    currentContest () {
        if ( this.state.currentContestId ) {
            return <Contest
                contestListClick={ this.fetchContestList }
                { ...this.state.contests[this.state.currentContestId] } />
        }
        return (<ContestList
            onContestClick={ this.fetchContest }
            contests={ this.state.contests }/>)

    }

    render () {
        return (
            <div className="app">
                <Header message={ this.pageHeader() }/>
                { this.currentContest() }
            </div>
        )
    }
}

export default App
