import React from 'react';
{/* props */}
function Box({color,name}){
    return (
      <>
        <div style={{ color }}>BOX {name}</div>
      </>
    );
}

Box.defaultProps = {
    name:'이름없음'
}

export default Box;