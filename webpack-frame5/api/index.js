import express from 'express'

import data from '../src/testData.json'

const contests = data.contests.reduce((obj, contest) => {
    obj[contest.id] = contest
    return obj
}, {})

const router = express.Router()

router.get('/contests', (req, res) => {
    res.send({
        contests: contests
    })
})

router.get('/contests/:contestId', (req, res) => {
    let contest = contests[req.params.contestId]
    contest.description = `this is a description for contest ${req.params.contestId}`
    res.send(contest)
})

export default router