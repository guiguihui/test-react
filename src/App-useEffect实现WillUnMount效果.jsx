import React, { useState, useEffect } from 'react';
function Box() {
    useEffect(() => {
        let num = 1
        let timer = setInterval(() => {
            console.log(num += 1)
        }, 500)

        return () => {
            clearInterval(timer)
        };
    }, []);

    return <div>box</div>
}
function App(props) {
    const [showBox, setShowBox] = useState(false);
    return (
        <div>
            <button onClick={() => setShowBox(!showBox)}>点击</button>
            {showBox && <Box></Box>}
        </div>
    );
}

export default App;