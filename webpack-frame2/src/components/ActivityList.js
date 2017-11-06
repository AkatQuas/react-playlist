import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
// import Calender from 'react-icons/lib/fa/calendar'


const ActivityRow = ({resort, date, powder, backcountry}) => (

    <tr>
        <td>
            {date.getMonth() + 1}/ {date.getDate()}/ {date.getFullYear()}
        </td>
        <td>{resort}</td>
        <td>{(powder) ? <SnowFlake/> : null}</td>
        <td>{(backcountry) ? <Terrain/> : null}</td>
    </tr>
)
ActivityRow.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    powder: PropTypes.bool,
    backcountry: PropTypes.bool
}

export const ActivityList = ({days, filter}) => {
    const filteredDays = (!filter || !filter.match(/powder|backcountry/)) ? days: days.filter(day => day[filter])
    console.log(filter, filteredDays)
    return (
        <div className="act-day-list">
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Resort</th>
                    <th>Powder</th>
                    <th>Backcountry</th>
                </tr>
                <tr>
                    <td colSpan={4}>
                        <NavLink to="/list-day">All Days</NavLink>
                        <NavLink to="/list-day/powder">Powder Days</NavLink>
                        <NavLink to="/list-day/backcountry">Backcountry Days</NavLink>
                    </td>
                </tr>
                </thead>
                <tbody>
                {filteredDays.map((day, i) => <ActivityRow key={i} {...day} />)}
                </tbody>
            </table>
        </div>
    )
}


ActivityList.propTypes = {
    days: function (props) {
        if (!Array.isArray(props.days)) {
            return new Error('Props days should be an array!')
        } else if (!props.days.length) {
            return new Error('Props days must have at least one record')
        } else {
            return null;
        }
    }
}
