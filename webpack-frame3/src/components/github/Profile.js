import React from 'react'
import RepoList from './RepoList'

class Profile extends React.Component {

    render() {
        return(
            <div>
                <div>
                    <p>{this.props.userData.name}</p>
                    <img src={this.props.userData.avatar_url} alt=""/>
                    <p>{this.props.userData.bio}</p>
                </div>
                <hr/>
                <h3>User Repositories</h3>
                <RepoList userRepos={this.props.userRepos} />

                <button>234</button>
            </div>
        )
    }
}

export default Profile
