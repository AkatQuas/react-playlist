import React from 'react'
import PropTypes from 'prop-types'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calender from 'react-icons/lib/fa/calendar'
import '../stylesheets/ui.scss'

//using React.Component
export class ActivityCountComponent extends React.Component {
    percentToDecimal(decimal) {
        return ((decimal * 100) + '%')
    }

    calcGoalProgress(total, goal) {
        return this.percentToDecimal(total / goal)
    }

    render() {
        console.log('creating count')
        return (
            <div className="days-wrapper">
                <div className="total-days">
                    <span>{this.props.total} <Calender/> days</span>
                </div>
                <div className="powder-days">
                    <span>{this.props.powder} <SnowFlake/> days</span>
                </div>
                <div className="back-days">
                    <span>{this.props.backcountry} <Terrain/> days</span>
                </div>
                <div className="goal">
                    <span>{this.props.goal}
                        days, now percentage: {this.calcGoalProgress(this.props.total, this.props.goal)}</span>
                </div>

            </div>
        )
    }
}

ActivityCountComponent.defaultProps = {
    total: 51,
    powder: 10,
    backcountry: 15,
    goal:120
}

ActivityCountComponent.propTypes = {
    total: PropTypes.number,
    powder: PropTypes.number,
    backcountry: PropTypes.number,
    goal: PropTypes.number
}
