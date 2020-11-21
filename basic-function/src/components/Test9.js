import React, { Component } from 'react'

class Test9 extends Component {
    state={
        change:"바꿀거"
    }
    click1 = () => {
        console.log("click1");
    };
    click2 = () => {
        console.log("click2");
        this.setState({
            change:"2번버튼 누름"
        })
    };
    click3 = () => {
        console.log("click3");
        this.setState({
            change:"3번 버튼 누름"
        })
    };
    click4 = () => {
        console.log("click4");
        this.setState({
            change:"4번 버튼 누름"
        })
    };

    render() {
        const customStyle = {
            margin: 0,
            padding: 0,
            color: "white",
            listStyle: "none",
        };
        return (
            <>
                <h2>버튼 누름:{this.state.change}</h2>
                <ul>
                    <li style={customStyle}>
                        <button type="button" onClick={this.click1}>
                            1
                        </button>
                    </li>
                    <li style={customStyle}>
                        <button type="button" onClick={this.click2}>
                            2
                        </button>
                    </li>
                    <li style={customStyle}>
                        <button type="button" onClick={this.click3}>
                            3
                        </button>
                    </li>
                    <li style={customStyle}>
                        <button type="button" onClick={this.click4}>
                            4
                        </button>
                    </li>
                </ul>
            </>
        );
    }
}

export default Test9;