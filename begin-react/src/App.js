import React from 'react';
import Hello from './Hello';
import Box from './Box';
import Wrapper from './Wrapper';
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
      <Box name="react" color="red" />
      <Box color="blue" />
    </Wrapper>
  );
}

export default App;
