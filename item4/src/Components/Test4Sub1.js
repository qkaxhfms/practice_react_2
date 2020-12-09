import React, { Component } from 'react';

class Test4Sub1 extends Component {
    render() {
        const {handleChange, nextStep} = this.props
        return (
            <div class="inner">
                <h2>해당 사항을 입력해 주세요</h2>
                <div className="inputContainer">
                    <ul>
                        <li>
                            <div>
                                <label htmlFor="lastname">성/가족이름</label>
                                <input type="text" id="lastname" name="lastname" onChange={handleChange} />
                            </div>
                        </li>
                        <li>
                            <div>
                                <label htmlFor="firstname">이름</label>
                                <input type="text" id="firstname" name="firstname" onChange={handleChange} />
                            </div>
                        </li>
                        <li>
                            <div>
                                <label htmlFor="email">이메일</label>
                                <input type="text" id="email" name="email" onChange={handleChange} />
                            </div>
                        </li>
                    </ul>
                    <div className="buttonContainer">
                        <button type="button" onClick={nextStep}>
                            다음
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Test4Sub1;