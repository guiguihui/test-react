import { useState, useMemo } from "react";

function App() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)

    const total = useMemo(() => {
        let n1 = parseInt(num1 || '0')
        let n2 = parseInt(num2 || '0')
        return n1 + n2
    }, [num1, num2])

    return (
        <div>
            <input type="text" value={num1} onChange={(event) => setNum1(event.target.value)}></input>
            +
            <input type="text" value={num2} onChange={(event) => setNum2(event.target.value)}></input>
            ={total}
        </div>
    )
}

export default App;