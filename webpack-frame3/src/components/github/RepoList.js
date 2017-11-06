import React from 'react'

const Repo = ({repo}) => {
    return (
        <div>
            <a href={repo.html_url}>{repo.name}</a>:{repo.description}
        </div>
    )

}


class RepoList extends React.Component {

    render() {
        console.log('repolist', this.props)
        return(
            <div>
                <ul>
                    {this.props.userRepos.map(repo => (
                        <Repo repo={repo} key={repo.id} {...this.props} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default RepoList
