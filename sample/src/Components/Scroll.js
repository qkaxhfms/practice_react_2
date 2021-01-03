import React,{useState, useEffect} from "react";
import styled from "styled-components";

const Scroll = () => {
    const [state, setState] = useState({
        x:0,
        y:0,
    })
    const onScroll = () => {
        setState({x:window.scrollX, y:window.scrollY})
    }
    useEffect(()=>{
        window.addEventListener("scroll",onScroll)
        return () => {window.removeEventListener("scroll",onScroll)}// 컴포넌트가 삭제될때 떠나가는 이벤트 리스너를 지워줌
    },[])// ComponentDidMount일때만 실행
    return state
}

export default function HooksUseScroll(){
    const {y} = Scroll()
    return(
        <Wrapper>
            <h1 style={{position:"fixed",color:y>100 ? "red":"blue"}}>하이</h1>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    height:1000vh;
`