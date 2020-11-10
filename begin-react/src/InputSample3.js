import React,{useState} from 'react';

function InputSample3(){
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출
  const onChange = (e) => {
    const { value, name } = e.target; // e.target 에서 name과 value를 추출
    setInputs({
      ...inputs, //기존의 input 객체를 복사한 뒤
      [name]: value, //name 키를 가진 값을 value 로 설정
    });
  };
  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
  };

  return (
    <>
      <input placeholder="이름" name="name" onChange={onChange} value={name} />
      <input
        placeholder="닉네임"
        name="nickname"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {/* 이름 (닉네임) */}
        {name}({nickname})
      </div>
    </>
  );
}

export default InputSample3;