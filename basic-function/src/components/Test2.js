import React, { Component } from 'react'

export default class Test2 extends Component {
    render() {
        const title ='타이틀'
        const customStyle = {
            margin:0,
            padding:0,
            backgroundColor:"black",
            color:"white"
        }
        return (
            <div style={customStyle}>
                {title}
            </div>
        )
    }
}
