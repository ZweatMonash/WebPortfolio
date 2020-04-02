import React, { Component } from 'react'
import { Redirect as Redirecter} from 'react-router-dom'

export class Redirect extends Component {
    render() {
        return <Redirecter to='/home' />
    }
}

export default Redirect
