import React from 'react'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calender from 'react-icons/lib/fa/calendar'
import PropTypes from 'prop-types'
import '../stylesheets/ui.scss'


const percentToDecimal = (decimal) => (decimal * 100) + '%'

const calcGoalProgress = (total, goal) => percentToDecimal(total / goal)

//using stateless functional components
export const ActivityCount = ({total, powder, backcountry, goal}) => {
    return (
        <div className="days-wrapper">
            <div className="total-days">
                <span>{total} <Calender/> days</span>
            </div>
            <div className="powder-days">
                <span>{powder} <SnowFlake/> days</span>
            </div>
            <div className="back-days">
                <span>{backcountry} <Terrain/> days</span>
            </div>
            <div className="goal">
                <span>{goal} days, now percentage: {calcGoalProgress(total, goal)}</span>
            </div>

        </div>
    )
}
ActivityCount.defaultProps = {
    total: 60,
    powder: 18,
    backcountry: 31,
    goal: 150
}
ActivityCount.propTypes = {
    total: PropTypes.number,
    powder: PropTypes.number,
    backcountry: PropTypes.number,
    goal: PropTypes.number
}