import React, { Component } from "react";
import "./Gallery.css";
import Test3List from "./Test3List";

class Test3 extends Component {
    state = {
        data: [
            {
                no: 1,
                poster: "https://img.megabox.co.kr/SharedImg/2020/03/11/Qgl73W9FxEMYJnnaOYPFtyqSrqB3vmJ2_420.jpg",
                title: "라라랜드",
                date: "2020.03.25",
                actor: "엠마 스톤",
                director: "데이미언 셔젤",
            },
            {
                no: 2,
                poster: "https://img.megabox.co.kr/SharedImg/2020/02/12/uPvwgYBnTlO1fdZm8bzilwDoaQJ2F8uA_420.jpg",
                title: "킹 오브 프리즘 올 스타즈",
                date: "2020.04.02",
                actor: "애니메이션",
                director: "히시다 마사카즈",
            },
            {
                no: 3,
                poster: "https://img.megabox.co.kr/SharedImg/2020/02/21/IyeZJvAzV3QgEoW4F7HzdS97zfLYfcni_420.jpg",
                title: "1917",
                date: "2020.02.19",
                actor: "조지 맥케이",
                director: "샘 멘데스",
            },
            {
                no: 4,
                poster: "https://img.megabox.co.kr/SharedImg/asis/system/mop/poster/2020/73/C2E59B-7D34-4220-8D51-580299453B88.large.jpg",
                title: "작은아씨들",
                date: "2020.03.25",
                actor: "시얼샤 로넌",
                director: "그레타 거윅",
            },
            {
                no: 5,
                poster: "https://img.megabox.co.kr/SharedImg/asis/system/mop/poster/2018/C6/013959-C07F-401A-AAC0-CA9A76DB48AE.large.jpg",
                title: "스타이즈본",
                date: "2018.10.09",
                actor: "레이디 가가",
                director: "브래들리 쿠퍼",
            },
            {
                no: 6,
                poster: "https://img.megabox.co.kr/SharedImg/2020/06/05/UDP3iiawhwQYYGGDZX3lmt73VFTovwIi_420.jpg",
                title: "결백",
                date: "2020.06.10",
                actor: "허준호, 배종옥, 신혜선",
                director: "박상현 ",
            },
            {
                no: 7,
                poster: "https://img.megabox.co.kr/SharedImg/2020/06/08/78Y8EFo0yUOJQRIkO4mIdYsxZG90g4bj_420.gif",
                title: "콜 미 바이 유어 네임백",
                date: "2020.06.11",
                actor: " 티모시 샬라메",
                director: "루카 구아다니노 ",
            },
            {
                no: 8,
                poster: "https://img.megabox.co.kr/SharedImg/asis/system/mop/poster/2017/D0/D558A7-DE6C-4178-B3F6-27A023AA5DEE.large.jpg",
                title: "위대한 쇼맨",
                date: "2020.05.21",
                actor: " 휴 잭맨",
                director: "마이클 그레이시 ",
            },
            {
                no: 9,
                poster: "https://img.megabox.co.kr/SharedImg/2020/05/25/3nE8zx0IneEL2zhcyDWIx9mh8mA8EWgI_420.jpg",
                title: "위대한 쇼맨",
                date: "2020.05.21",
                actor: " 휴 잭맨",
                director: "마이클 그레이시 ",
            },
            {
                no: 10,
                poster: "https://img.megabox.co.kr/SharedImg/2020/05/13/L1M5yrfpINDCNXETFojjPzPfJk8jcpxx_420.jpg",
                title: "침입자",
                date: "2020.06.10",
                actor: "송지효, 김무열",
                director: "손원평",
            },
            {
                no: 11,
                poster: "https://img.megabox.co.kr/SharedImg/2020/09/25/4kUTZBzkNr6o4iGcIA1xARHdzqlQxlhR_420.jpg",
                title: "국제수사",
                date: "2020.09.29",
                actor: "곽도원, 김대명, 김희원, 김상호",
                director: "김봉한",
            },
            {
                no: 12,
                poster: "https://img.megabox.co.kr/SharedImg/2020/07/29/W3xWQv4N2jryIQvvwqIkq9TqzU1tWmqO_420.jpg",
                title: "테넷",
                date: "2020.08.26",
                actor: "존 데이비드 워싱턴",
                director: "크리스토퍼 놀란",
            },
            {
                no: 13,
                poster: "https://img.megabox.co.kr/SharedImg/2020/09/16/SQhMdk4T2bk5Zr8jRpTO6kLE3eTjkwLW_420.png",
                title: "죽지않는 인간들의 밤",
                date: "2020.09.29",
                actor: "이정현, 김성오",
                director: "신정원",
            },
            {
                no: 14,
                poster: "https://img.megabox.co.kr/SharedImg/2020/09/17/oIsaaaG39Z6x4qLiOTLFXtmDEEoTtr2V_420.jpg",
                title: "담보",
                date: "2020.09.29",
                actor: "성동일, 하지원, 김희원",
                director: "강대규",
            },
        ],
    };

    handleRemove = (num) => {
        const { data } = this.state;
        this.setState({
            data: data.filter((item) => item.no !== num),
        });
    };

    render() {
        const { data } = this.state;
        return (
            <div className="gallery">
                <Test3List data={data} onRemove={this.handleRemove} />
            </div>
        );
    }
}

export default Test3;
