import React from 'react'
import PropTypes from 'prop-types'
import ContestPreview from './ContestPreview'

const ContestList = ({ contests, onContestClick }) => (
    <div className="contest-list">
        { Object.keys(contests).map(contestId => (
            <ContestPreview
                onClick={ onContestClick }
                key={ contestId } { ...contests[contestId] }/>)
        )
        }
    </div>
)

ContestList.propTypes = {
    contests: PropTypes.object,
    onContestClick: PropTypes.func
}

export default ContestList