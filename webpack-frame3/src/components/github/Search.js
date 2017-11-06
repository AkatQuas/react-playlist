import React from 'react'

class Search extends React.Component {
    onSubmit(e) {
        e.preventDefault()
        console.log('submit')
        console.log(this)
        let username = this.refs.username.value.trim();
        if (!username) {
            return alert('input your username')
        }
        this.props.onFormSubmit(username);
        this.refs.username.value = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label htmlFor="">Search GitHub User</label><br/>
                    <input type="text" ref="username" placeholder="Input your username"/>
                </form>
            </div>
        )

    }
}

export default Search
