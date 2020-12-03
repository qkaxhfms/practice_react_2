import React, { Component } from "react";

class Test3Item extends Component {
    render() {
        const { item, onRemove } = this.props;
        return (
            <article>
                <div className="left">
                    {/* <img src={this.props.item.poster}/> */}
                    <img src={item.poster} />
                </div>
                <div className="right">
                    <h3> {item.title}</h3>
                    <ul>
                        <li>출연진 :{item.actor}</li>
                        <li>감독 : {item.director} </li>
                        <li>개봉일 :{item.date}</li>
                    </ul>
                    <button onClick={() => onRemove(item.no)}>삭제</button>
                </div>
            </article>
        );
    }
}

export default Test3Item;
