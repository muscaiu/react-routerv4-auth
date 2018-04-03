import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { Public } from './Public'
import { Protected } from './Protected'
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import AuthButton from './AuthButton';

export default function App() {
  return (
    <Router>
      <div>
        <AuthButton />
        {/* Nav Links*/}
        <ul>
          <li><Link to="/public">Public Page</Link></li>
          <li><Link to="/protected">Protected Page</Link></li>
        </ul>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path='/protected' component={Protected} />
      </div>
    </Router>
  )
}