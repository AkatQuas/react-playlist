import React from 'react'
import {ActivityList} from "./ActivityList"
import {ActivityCount} from "./ActivityCount"

export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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

    }

    countDays(filter) {
        const {allDays} = this.state
        return allDays.filter((day) => (filter) ? day[filter] : day).length
    }

    render() {
        return (
            <div className="app">
                <ActivityList days={this.state.allDays}/>
                <ActivityCount total={this.countDays()}
                               powder={this.countDays('powder')}
                               backcountry={this.countDays('backcountry')}
                />
            </div>
        )
    }
}
