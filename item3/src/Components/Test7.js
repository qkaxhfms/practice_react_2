import React, { Component } from 'react'

class Test7 extends Component {
    state={
        userid:'',
        userpw:'',
        email:'',
    }

    handleChange1 = (e) => {
        this.setState({
            userid:e.target.value
        })
    }
    handleChange2 = (e) => {
        this.setState({
            userpw:e.target.value
        })
    }
    handleChange3 = (e) => {
        this.setState({
            email:e.target.value
        })
    }

    handleReset = () => {
        this.setState({
            userid:'',
            userpw:'',
            email:''
        })
    }

    render() {
        const {userid, userpw, email} = this.state
        return (
            <div>
                <div>
                    <input text="text" value={userid} onChange={this.handleChange1} />
                    <input text="text" value={userpw} onChange={this.handleChange2}/>
                    <input text="text" value={email} onChange={this.handleChange3}/>
                </div>
                <button onClick={this.handleReset}>내용 초기화</button>
                <h4>아이디:{userid}</h4>
                <h4>비밀번호:{userpw}</h4>
                <h4>이메일:{email}</h4>
            </div>
        );
    }
}
export default Test7;