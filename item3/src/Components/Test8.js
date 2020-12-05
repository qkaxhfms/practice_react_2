import React, { Component } from 'react'

class Test8 extends Component {
    state = {
        username:'',
        useraddr:''
    }

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({
            [name]:value
        })
    }

    render() {
        const {username,useraddr} = this.state
        return (
            <div>
                <h3>이름 : {username}</h3>
                <input type="text" name="username" onChange={this.handleChange}/>
                <h3>주소 : {useraddr}</h3>
                <input type="text" name="useraddr" onChange={this.handleChange}/>
            </div>
        )
    }
}

export default Test8;