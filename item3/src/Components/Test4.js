import React, { Component } from 'react'

class Test4 extends Component {
    state = {
        count:0,
    }
    increase1 = () => {
        this.setState({
            count:this.state.count +1,
        })
    }
    decrease1 = () => {
        this.setState({
            count:this.state.count -1,
        })
    }

    increase2 = () => {
        this.setState({
            count:this.state.count +1,
        })
        this.setState({
            count:this.state.count + 1,
        });
        this.setState({
            count:this.state.count + 1,
        });
    }
    decrease2 = () => {
        this.setState({
            count:this.state.count -1,
        })
        this.setState({
            count:this.state.count - 1,
        });
        this.setState({
            count:this.state.count - 1,
        });
    }

    increase3 = () => {
        this.setState((prevState,props)=>{
            return({
                count:prevState.count +1
            })
        })
        this.setState((prevState) => {
            return{
                count:prevState.count+1
            }
        })
    }
    decrease3 = () =>{
        this.setState((prevState,props)=>{
            return{
                count:prevState.count -1
            }
        })
        this.setState((prevState,props)=>{
            return{
                count:prevState.count -1
            }
        })
    }

    increase4 = () => {
        this.setState({
            count:this.state.count+1
        },()=>this.setState({
            count:this.state.count+1
        },()=>this.setState({
            count:this.state.count+1
        })))
    }
    decrease4 = () => {
        this.setState({
            count:this.state.count-1
        },()=>this.setState({
            count:this.state.count-1
        },()=>this.setState({
            count:this.state.count-1
        })))
    }

    increase5 = () => {
        for(let i=0; i<5; i++){
            this.setState(state=>{
                return{
                    count:state.count+1
                }
            })
        }
    }

    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <h3>값 전달</h3>
                <div>
                    <button onClick={this.increase1}>1씩 증가</button>
                    <button onClick={this.decrease1}>1씩 감소</button>
                </div>
                <h3>이렇게 값 전달하면 전달 안됨</h3>
                <div>
                    <button onClick={this.increase2}>2씩 증가</button>
                    <button onClick={this.decrease2}>2씩 감소</button>
                </div>
                <h3>리턴값 받기</h3>
                <div>
                    <button onClick={this.increase3}>2씩 증가</button>
                    <button onClick={this.decrease3}>2씩 감소</button>
                </div>
                <div>
                    <button onClick={this.increase4}>2씩 증가</button>
                    <button onClick={this.decrease4}>2씩 감소</button>
                </div>
                <h3>5씩 증가</h3>
                <div>
                    <button onClick={this.increase5}>5씩 증가</button>
                </div>
            </div>
        );
    }
}

export default Test4;