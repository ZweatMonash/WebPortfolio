import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="footer-content">
                <div className="motto-bar">
                    
                </div>
                <div className="icon-bar d-flex justify-content-around">
                    <a href="https://www.linkedin.com/in/zwehtet/">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="mailto:zwe229679@gmail.com">
                        <i className="fas fa-envelope fa-2x"></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default Footer
