import React, { Component } from 'react'

export default class Test3 extends Component {
    render() {
        const done = true

        return (
            <div>
                <p>{done===true ? 'true래':'틀렸대'}</p>
                <p>{done && <span>and 앞에 결과가 참이면 이게 나옴</span>}</p>
                <p>{done || <span>or 둘중에 하나만 맞으면 이게 나옴</span>}</p>
            </div>
        )
    }
}
