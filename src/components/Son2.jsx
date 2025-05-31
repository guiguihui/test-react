import React, {Component} from 'react';

class Son2 extends Component {
     state = {
        msg: "hello"
    }

    render() {
        return (
            <div>
                <p>{this.state.msg}</p>
                <button onClick={()=>this.props.changeNum(this.props.num+1)}>子组件, num={this.props.num}</button>
            </div>
        );
    }

    show(){
        console.log("show方法被执行")
    }
}

export default Son2;