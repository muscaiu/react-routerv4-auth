import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './Header.css'

const NavBar = () => (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/admin">Admin</Link>
        </li>
        <li>
            <Link
                to={{
                    pathname: '/logs',
                    search: '?filter=active',
                    state: { fromNavBar: true }
                }}
            >
                Logs
            </Link>;
        </li>
        <li>
            <Link replace={true} to="/children">Children</Link>
        </li>
        <li>
            <NavLink activeClassName="active" to="/">Home Acttive Navlink</NavLink>
        </li>
    </ul>
);

class Header extends Component {
    render() {
        return (
            <div>
                Header
                <NavBar />
            </div>
        )
    }
}

export default Header