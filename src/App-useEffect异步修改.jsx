import React, { useState, useEffect } from 'react';
import axios from "axios";

function App() { // render
    const [data, setData] = useState([]) // 参数是默认值

    // 参数1，就是副作用代码，
    // 参数2，就医副作用依赖，
    // 如果参数2是一个空数组，则表示当前代码是没有任何外部依赖的副作用代码，只需要执行一次。
    useEffect(() => {
        axios.get("/data.json").then(response => {
            setData(response.data)
        })
    }, [])

    useEffect(() => {
        // 异步代码中修改属性/state的操作，就是副作用操作
        setTimeout(() => {
            setData([{ "id": 1, "name": "小黄" }])
            console.log("11111")
        }, 1000)
    }, [])

    return (
        <div>
            <ul>
                {data.map((item, key) =>
                    <li key={key}>id={item.id}, name={item.name}</li>
                )}
            </ul>
        </div>
    );
}

export default App;