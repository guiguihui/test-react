import { createStore } from 'redux';

const reducer = (state = 10, action) => {
    console.log("state=", state, "action=", action,)
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }

};

let store = createStore(reducer);

// subscribe 用于监听指定状态是否发生了变化，
// 返回值，就是用于在不需要监听的时候，可以实现解绑
let unsubscribe = store.subscribe(() =>
    console.log("state发生了变化：", store.getState())
);

// 如果要取消监听，则直接执行unsubscribe方法即可。
// unsubscribe()

export default store;