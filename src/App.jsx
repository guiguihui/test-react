import React from "react";
import store from './store';
import { Provider } from "react-redux";
import { connect } from "react-redux";

function App() {
    return (
        <div>
            <p>{store.getState()}</p>
            <button onClick={() => {
                store.dispatch({ type: "INCREMENT", val: 10 });
            }}>点击自增</button>
            <button onClick={() => {
                store.dispatch({ type: "DECREMENT", val: 10 });
            }}>点击自减</button>
        </div>
    )
}

// 状态同步处理
const mapStateToProps = state => state;
const mapDispatchToProps = {
    INCREMENT: {
        type: 'INCREMENT',
    },
    DECREMENT: {
        type: 'DECREMENT',
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);