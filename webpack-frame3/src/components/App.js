import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Profile from './github/Profile'
import axios from 'axios'
import Search from './github/Search'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'akatquas',
            userData: {},
            userRepos: [],
            perPage: 5
        }
    }
    getUserData() {
        axios.get('https://api.github.com/users/'+this.state.username+'?client_id'+ this.props.clientId + '&client_secret'+this.props.clientSecret).then(res => {
            console.log(res)
            this.setState({userData:res.data})
        }).catch(err => {
            console.error(err)
        })
    }
    getUserRepos() {
        axios.get('https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id'+ this.props.clientId + '&client_secret'+this.props.clientSecret+'&sort=created').then(res => {
            console.log(res)
            this.setState({userRepos:res.data})
        }).catch(err => {
            console.error(err)
        })
    }
    handleFormSubmit(username) {
        this.setState({username:username}, function () {
            this.getUserData();
            this.getUserRepos();
        })
    }
    componentDidMount() {
        this.getUserData();
        this.getUserRepos();
    }
    render() {
        return (
            <div>
                <Search onFormSubmit = {this.handleFormSubmit.bind(this)} />
                <Profile
                    {...this.state}
                />
            </div>
        )
    }
}
App.propTypes = {
    clientId: PropTypes.string,
    clientSecret: PropTypes.string
}
App.defaultProps = {
    clientId:'aa5d4acff1f7e803e232',
    // clientId:'',
    // clientSecret:''
    clientSecret:'f71e7464794bb3434032cdd2a24a1284fea8eb9c'
}
export default App