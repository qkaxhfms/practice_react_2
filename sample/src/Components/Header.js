import React,{useState,useEffect} from "react";
import styled from "styled-components";

const Header = () => {

    const [scrolling,setScrolling] = useState(false)
    const headerChange = () => {
        window.scrollY > 1 ? setScrolling(true):setScrolling(false)
    }
    useEffect(() => {
        window.addEventListener("scroll", headerChange)
        return () => {window.removeEventListener("scroll",headerChange)}
    }, [])

    return (
        <>
            <Wrapper>
                <HeaderLayout className={`${scrolling ? 'on':'' }`}>
                    <span>헤더</span>
                </HeaderLayout>
            </Wrapper>
        </>
    );
}

export default Header;

const Wrapper = styled.div`
    height:1000vh;
`
const HeaderLayout = styled.header`
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:center;
    top:0;
    left:0;
    margin: 0;
    padding: 0;
    width:100%;
    height:40px;
    text-align: center;
    background: #000;
    color:#fff;
    &.on{
        background-color:blue;
    }
`