import React, { Component } from 'react'

class Test1 extends Component {
    render() {
        const title='신상명세서';
        const name='홍길동';
        const age=20;
        const addr='서울';
        const done=false;
        const color='green';
        const style1 = {
            color:'pink',
            fontSize:16,
            backgroundColor:'yellow',
        };
        return (
            <div>
                <h2>변수:{} - JSX</h2>
                <h3 syle={{color,fontSize:20}}>{title}</h3>
                <ul>
                    <li style={style1}>이름:{name}</li>
                    <li>나이:{age}</li>
                    <li>주소:{addr}</li>
                    <li>{done === true ? '참':'거짓'}</li>
                    <li>{done && '참이면 이게나옴'}</li>
                    <li>{done || '둘중에 하나가 참이면 나옴'}</li>
                </ul>
                Test1
            </div>
        )
    }
}

export default Test1;