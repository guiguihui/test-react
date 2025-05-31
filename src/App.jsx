import React from "react";
import ReactDOM from 'react-dom/client'
import Son2 from './components/Son2'

class App extends React.Component {
    state = {
        num: 100,
    }
    son = React.createRef()
    render() {
        return (
            <>
                <Son2 ref={this.son} changeNum={this.changeNum.bind(this)} num={this.state.num}></Son2>
                <p>num={this.state.num}</p>
                <button onClick={()=>{
                    this.son.current.setState({
                        msg:"来自父组件的关怀"
                    })
                    this.son.current.show()
                }}>
                    点击修改子组件的数据
                </button>
            </>
        )
    }

    changeNum(num){
        this.setState({
            num
        })
    }
}
export default App