import React from 'react';

function Practice({aaa,bbb,ccc,ddd}){
    // const abcd = "야아아아";
    return (
      <>
        <p>
          Practice
          <br />
          {aaa}
          <br />
          {bbb}
          <br />
          {ccc}
          <br />
          {ddd}
        </p>
      </>
    );
}

Practice.defaultProps = {
  aaa: "a는 값 없음",
  bbb: "b도 값 없음",
  ccc: "c는 값 없음",
  ddd: "d도 값 없음",
};

export default Practice;