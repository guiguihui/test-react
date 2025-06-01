import React from "react";
import bus from "./bus";

class Header extends React.Component{
    state={
        num:100,
    }
    componentDidMount(){
        console.log("componentDidMount")
        //先订阅
        bus.subscribe((value)=>{
            this.setState({
                num:value
            })
        })
    }
    render(){
        console.log("渲染")
        return (
            <div>
                <button onClick={()=>{
                    //后发布
                    bus.publish(this.state.num+1);
                }}>修改数据 </button>
                我是Header中的头部内容,{this.state.num}
            </div>
        )
    }
}

export default Header;