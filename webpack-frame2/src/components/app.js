import React from 'react'
import createReactClass from 'create-react-class'
import {ActivityList} from "./ActivityList"
import {ActivityCount} from "./ActivityCount"
import {AddDayForm} from "./AddDayForm"
import {Menu} from "./Menu"

export const App = createReactClass({
    getInitialState() {
        return {
            allDays: [
                {
                    resort: 'Squaw Valley',
                    date: new Date('1/2/2017'),
                    powder: true,
                    backcountry: false
                },
                {
                    resort: 'Kirkwood',
                    date: new Date('3/28/2017'),
                    powder: false,
                    backcountry: false
                },
                {
                    resort: 'Mt. Tallac',
                    date: new Date('4/2/2017'),
                    powder: false,
                    backcountry: true
                }
            ]
        }
    },
    countDays(filter) {
        const {allDays} = this.state
        return allDays.filter((day) => (filter) ?  day[filter] :  day ).length
    },
    render() {
        console.log(this)
        return (
            <div className="app">
                <Menu/>
                {(this.props.location.pathname === '/') ?
                    <ActivityCount total={this.countDays()}
                                   powder={this.countDays('powder')}
                                   backcountry={this.countDays('backcountry')}/> : (this.props.location.pathname === '/add-day') ?
                        <AddDayForm/> : <ActivityList days={this.state.allDays} filter={this.props.match.params.filter}/>
                }
            </div>
        )
    }
})
