import React,{useState, useEffect} from "react";
import styled from "styled-components";

const Scroll = () => {
    const [state, setState] = useState({
        x:0,
        y:0,
    })
    const onScroll = () => {
        setState({
            x:window.scrollX,
            y:window.scrollY
        })
        console.log(window.scrollY)
    }
    useEffect(()=>{
        window.addEventListener("scroll",onScroll) // <-- scroll이 window에서 처음 실행되는 것
        return () => {window.removeEventListener("scroll",onScroll)}// 컴포넌트가 삭제될때 떠나가는 이벤트 리스너를 지워줌
    },[])// ComponentDidMount일때만 실행
    return state
}

export default function HooksUseScroll(){
    const {y} = Scroll()
    return (
        <Wrapper>
            <Title y={y}>하이</Title>
            {/* <Title /> */}
            {/* <Title style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>하이</Title> */}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height:800vh;
`
const Title = styled.h1`
    /* ${(props) => (props.y > 100 ? "red" : "blue")} */
    position:fixed;
    color: ${({y}) => (y > 100 ? "red" : "blue")};
`;