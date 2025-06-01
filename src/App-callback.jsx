import { useState, useMemo, useCallback } from "react";

function App() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    // 计算属性
    const total1 = useMemo(() => {
        let n1 = isNaN(parseFloat(num1)) ? 0 : parseFloat(num1)
        let n2 = isNaN(parseFloat(num2)) ? 0 : parseFloat(num2)
        return n1 + n2
    }, [num1, num2]);

    const total2 = useCallback((dot) => {
        let n1 = isNaN(parseFloat(num1)) ? 0 : parseFloat(num1)
        let n2 = isNaN(parseFloat(num2)) ? 0 : parseInt(num2)
        return (n1 + n2).toFixed(dot)
    }, [num1, num2]);

    return (
        <div>
            <input type="text" value={num1} onChange={(event) => setNum1(event.target.value)} />
            +
            <input type="text" value={num2} onChange={(event) => setNum2(event.target.value)} />
            <br />Memo = {total1.toFixed(2)}
            <br />Callback = {total2(3)}
        </div>
    )
}

export default App;