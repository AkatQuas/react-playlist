import React from 'react'
import ReactDOMServer from 'react-dom/server'
import axios from 'axios'
import config from './config'
import App from './src/components/App'

const getApiUrl = contestId => {
    console.log(contestId)
    console.log(`${config.serverUrl}/api/contests` + ( contestId ? `/${contestId}` : ''))
    return `${config.serverUrl}/api/contests` + ( contestId ? `/${contestId}` : '')
}

const getInitialData = (contestId, apiData) => {
    if (contestId) {
        return {
            currentContestId: apiData.id,
            contests: {
                [apiData.id]: apiData
            }
        }
    }
    return {
        contests: apiData.contests
    }
}

const serverRender = (contestId) =>
    axios.get(getApiUrl(contestId)).then(res => {
        console.log(res)
        const initialData = getInitialData(contestId, res.data)
        return {
            initialMarkup: ReactDOMServer.renderToString(
                <App initialData={initialData}/>
            ),
            initialData: res.data
        }
    })

export default serverRender
