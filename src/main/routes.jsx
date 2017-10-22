import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import HomePage from '../template/home-page'
import HeroPage from '../template/hero-page'

export default props => (
    <Router history={hashHistory}>
        <Route path='/home' component={HomePage}/>
        <Route path='/hero' component={HeroPage}/>
        <Redirect from='*' to='/hero'/>
    </Router>
)