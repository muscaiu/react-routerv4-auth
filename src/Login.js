import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

import { fakeAuth } from './fakeAuth';

class Login extends Component {
    state = {
        isLoggedIn: false
    }
    login = () => {
        fakeAuth.authenticate(() => {
            this.setState(() => ({
                isLoggedIn: true
            }))
        })
    }
    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { isLoggedIn } = this.state

        if (isLoggedIn === true) {
            <Redirect to={from} />
        }

        return (
            <div>
                <p>You must log in to view the page</p>
                <button onClick={this.login}>Log in</button>
            </div>
        )
    }
}
export default Login;
