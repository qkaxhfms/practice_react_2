import React, { Component } from 'react'

class Test4Sub3 extends Component {
    render() {
        const { 
            values, nextStep, prevStep 
        } =this.props 
        const { 
            firstname , lastname , email , tel, occ, addr 
        } = values 
        return (
            <div className="inner">
                <div>
                    <ul>
                        <li>
                            <span>성/가족이름</span> : {lastname}
                        </li>
                        <li>
                            <span>이름</span> : {firstname}
                        </li>
                        <li>
                            <span>이메일</span> : {email}
                        </li>
                        <li>
                            <span>직업</span> : {occ}
                        </li>
                        <li>
                            <span>연락처</span> : {tel}
                        </li>
                        <li>
                            <span>주소</span> : {addr}
                        </li>
                    </ul>
                    <div className="buttonContainer">
                        <button type="button" onClick={prevStep}>이전</button>
                        <button type="button" onClick={nextStep}>다음</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Test4Sub3;