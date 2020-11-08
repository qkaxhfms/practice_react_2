import React from 'react';
{/* props */}
function Box({color,name,isSpecial}){
    return (
      <>
        <div style={{ color }}>
          {/* {isSpecial ? <b>값이 true라면 * 삽입 </b> : null} */}
          {/* {isSpecial ? <b>*</b> : false} */}
          {/* {isSpecial ? <b>*</b> : undefined} */}
          {isSpecial && <b>값이 true라면 * 삽입 </b>}
          BOX {name}
        </div>
      </>
    );
}

Box.defaultProps = {
    name:'이름없음'
}

export default Box;