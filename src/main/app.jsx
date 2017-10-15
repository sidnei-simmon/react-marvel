import 'modules/material-design-lite/material.min.css'
import 'modules/material-design-lite/material.min.js'
import '../template/custom.css'

import React from 'react'

import Nav from '../template/nav'
import Content from '../template/container'
import Routes from './routes'

export default props => (
    <div>
        <Nav>
            <Content>
                <Routes/>
            </Content>
        </Nav>
    </div>
)