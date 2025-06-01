import { useState, useMemo } from "react";

function App() {
    const [state, setState] = useState("初始值");
    //普通函数
    const fn = () => {
        console.log("普通函数：", state);
    };

    //记忆函数，这里第二个参数设置为[]，表示不依赖任何值，只在组件初始化时创建mfn，组件更新时不更新mfn
    const mfn = useMemo(() => {
        return () => console.log("记忆函数：", state)
    }, []);

    //组件Home，mount 和 update时都执行
    fn();
    mfn();

    const update = () => {
        setState(Math.random())
    };

    return (
        <div>
            <div>state值:{state}</div>
            <button onClick={update}>改变state</button>
        </div>
    );
}

export default App;