import React,{useRef}from 'react';
import Userlist from './Components/Userlist';

// useRef -> 컴포ㅓㄴ트 안에서 조회 및 수정할 수 있는 변수를 관리하는 것
// state는 상태를 바꾸는 함수를 호출하고 나서 그 다음 렌더링 이후 업데이트 된 상태를 조회할 수 있는 반면
// useRef로 관리하고 있는 변수는 설정 후 바로 조회가 가능핟.

// setTimeout, setInterval을 통해서 만들어진 id
// 외부 라이브러리를 사용하여 생성된 인스턴스
// scroll 위치

// -> 새 항목에서 사용할 고유 id를 관리하는 용도


function App() {

  const users = [
      {
          id: 1,
          username: "velopert",
          email: "public.velopert@gmail.com",
      },
      {
          id: 2,
          username: "tester",
          email: "tester@example.com",
      },
      {
          id: 3,
          username: "liz",
          email: "liz@example.com",
      },
  ];

  const nextId = useRef(4);
// 변수를 계속 기억하고 싶을 때-> 계속 기억하고 싶을 때

  const onCreate = () => {
    console.log(nextId.current) //4
    nextId.current +=1;
  }

  return (
    <div className="App">
      <Userlist users={users}/>
    </div>
  );
}

export default App;
