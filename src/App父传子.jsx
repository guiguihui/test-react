import React from "react";
import ReactDOM from 'react-dom/client'
import Banner from "./components/Banner";

class App extends React.Component{
    state={
        number:0,
    }
    msg = 'hello,message'
    render(){
        return(
            <div>
                <button onClick={()=>this.setState({number:this.state.number+1})}>number={this.state.number}</button>
                <Banner msg={this.msg} num={this.state.number}></Banner>
            </div>
        )
    }
}
export default App