import React,{useState,useEffect} from "react";

const Item = () => {
    // count
    const [count, setCount] = useState(4);
    const increaseItem = () => setCount(count +1);
    const decreaseItem = () => setCount(count -1);
    
    // item
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState("");

    const onChangeName = e => {
        setName(e.target.value);
    }
    const onChangeNickName = e => {
        setNickname(e.target.value);
    }
    // useEffect(()=>{
    //     console.log('렌더링이 완료되었습니다.');
    //     console.log(name,nickname)
    // },[name])
    useEffect(()=>{
        console.log('effect');
        console.log(name);
        return() => {
            console.log('cleanup')
            console.log(name);
        }
    })
    return (
        <>
            <div>
                <h2>count: {count}</h2>
                <button type="button" onClick={increaseItem}>
                    추가
                </button>
                <button type="button" onClick={decreaseItem}>
                    감소
                </button>
            </div>
            <div>
                <input value = {name} onChange={onChangeName} />
                <input value = {nickname} onChange={onChangeNickName} />
                <p>이름 :{name}</p>
                <span>닉네임 : {nickname}</span>
            </div>
        </>
    );
}

export default Item;
