import React, { Component } from 'react';

class Test4Sub2 extends Component {
    render() {
        const {handleChange, prevStep, nextStep} = this.props
        return (
            <div className="inner">
                <h2>해당 사항을 입력해 주세요</h2>
                <div className="inputContainer">
                    <ul>
                        <li>
                            <div>
                                <label htmlFor="occ">직업</label>
                                <input type="text" id="occ" name="occ" onChange={handleChange} />
                            </div>
                        </li>
                        <li>
                            <div>
                                <label htmlFor="tel">연락처</label>
                                <input type="text" id="tel" name="tel" onChange={handleChange} />
                            </div>
                        </li>
                        <li>
                            <div>
                                <label htmlFor="addr">주소</label>
                                <input type="text" id="addr" name="addr" onChange={handleChange} />
                            </div>
                        </li>
                    </ul>
                    <div className="buttonContainer">
                        <button type="button" onClick={prevStep}>
                            이전
                        </button>
                        <button type="button" onClick={nextStep}>
                            다음
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Test4Sub2;