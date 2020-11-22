import React, { Component } from 'react'
class Test10 extends Component {
    render() {
        const done = true;
        return (
            <div>
                <p>{done === true ? 'true출력':'false출력'}</p>
                <p>{done && <span>AND 앞에 결과가 '참'이면 이게나옴</span>}</p>
                <p>{done || <span>OR 둘중에 '하나'만 맞으면 이게나옴</span>}</p>
            </div>
        )
    }
}

export default Test10;