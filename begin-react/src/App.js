import React from 'react';
import Hello from './Hello';
import Box from './Box';
import Practice from "./Practice";
import Wrapper from './Wrapper';
import Counter from "./Counter";
import Counter2 from "./Counter2";
import InputSample from "./InputSample";
import InputSample2 from "./InputSample2";
import InputSample3 from './InputSample3';
import InputSample4 from './InputSample4';
import './css/App.css';

function App() {
  const name = "name값 입력";
  const style = {
    backgroundColor:'black',
    color:'yellow',
    fontSize:24,
    padding:'1rem'
  }
  return (
    <Wrapper>
      <Hello />
      <Hello />
      <Hello />
      {/* 주석은 이렇게 쓰는거다! */}
      /* 주석은 이렇게 쓰면 안됨 */
      <p style={style}>{name}</p>
      <div className="gray-box"></div>
      <br />
      <Box name="react" color="red" isSpecial={true} />
      <Box color="blue" />
      <Practice aaa="111" bbb="222" ccc="333" ddd="444" />
      <Practice />
      <InputSample />
      <Counter />
      <Counter2 />
      <InputSample2 />
      <InputSample3 />
      <InputSample4 />
    </Wrapper>
  );
}

export default App;
