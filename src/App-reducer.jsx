import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
    // state状态, action动作、信号
    console.log("state=", state, "action=", action)
    const newState = { ...state }
    switch (action.type) {
        case "add":
            newState.num += action.val;
            break
        case "sub":
            newState.num -= action.val;
            break
    }
    // reducer必须要返回一个新状态
    return newState
}

// 状态的初始值
const initialState = 10

// 状态的包装函数[对状态的初始值进行加工处理]
const init = (initialState) => {
    return {
        "num": initialState,
        "name": "xiaoming"
    }
}

function Header() {
    // 每个组件内部都可以使用一个或多个useReducer，每个组件的useReducer状态都是独立的。
    const [state, dispatch] = useReducer(reducer, initialState, init);
    return (
        <div>
            <h1>Header组件</h1>
            <button onClick={() => dispatch({ type: "add", val: 1 })}>增加，num={state.num}</button>
            <button onClick={() => dispatch({ type: "sub", val: 1 })}>减少，num={state.num}</button>
        </div>
    )
}

function App() {
    // const [state, setState] = useState(10);
    // useReducer 的返回值是数组，成员分别是状态，分发函数
    // reducer 修改状态的函数，函数必须提供2个参数
    // initialState 状态的初始化值
    // init  状态的初始化值的包装器函数,必须提供一个参数
    const [state, dispatch] = useReducer(reducer, initialState, init);
    return (
        <div>
            <h1>App组件</h1>
            <button onClick={() => dispatch({ type: "add", val: 1 })}>增加，num={state.num}</button>
            <button onClick={() => dispatch({ type: "sub", val: 1 })}>减少，num={state.num}</button>
            <hr />
            <Header></Header>
        </div>
    )
}

export default App;