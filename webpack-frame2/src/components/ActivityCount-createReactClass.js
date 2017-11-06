import React from 'react'
import createReactClass from 'create-react-class'
import PropTypes from 'prop-types'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calender from 'react-icons/lib/fa/calendar'
import '../stylesheets/ui.scss'

//using createReactClass way
export const ActivityCountClass = createReactClass({
    propTypes: {
        total: PropTypes.number,
        powder: PropTypes.number,
        backcountry: PropTypes.number,
        goal: PropTypes.number.isRequired

    },
    getDefaultProps() {
        return {
            total:50,
            powder: 50,
            backcountry: 15,
            goal: 100
        }
    },
    percentToDecimal(decimal) {
        return ((decimal * 100) + '%')
    },
    calcGoalProgress(total, goal) {
        return this.percentToDecimal(total/goal)
    },
    render() {
        return (
            <div className="days-wrapper">
                <div className="total-days">
                    <span>{this.props.total} <Terrain/> days</span>
                </div>
                <div className="powder-days">
                    <span>{this.props.powder} <SnowFlake/> days</span>
                </div>
                <div className="back-days">
                    <span>{this.props.backcountry} <Calender/> days</span>
                </div>
                <div className="goal">
                    <span>{this.props.goal} days, now percentage: {this.calcGoalProgress(this.props.total, this.props.goal)}</span>
                </div>

            </div>
        )
    }
});

