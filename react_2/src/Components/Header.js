import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import styled from 'styled-components';

const Header = styled.header`
    color:#fff;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:50px;
    display: flex;
    align-items:center;
    background:rgba(1121,85,72,0.8);
    z-index:10;
    box-shadow:0 1px 4px 2px rgba(0,0,0,0.32);
`;

const List = styled.ul`
    display:flex;
`;

const Item = styled.li`
    width:80px;
    height:50px;
    border-bottom:3px solid ${props => (props.current ? "#FFB300" : "transparent")};
    transition:border-bottom 0.3s ease-in-out;
`;

const SLink = styled(Link)`
    height:50px;
    display: flex;
    align-items:center;
    justify-content:center;
`;

export default withRouter(({location: {pathname}}) => (
    <Header>
        <List>
            <Item current={pathname === "/"}><SLink to="/">홈</SLink></Item>
            <Item current={pathname === "/movie"}><SLink to="/movie">영화</SLink></Item>
            <Item current={pathname === "/search"}><SLink to="/search">검색</SLink></Item>
        </List>
    </Header>
));