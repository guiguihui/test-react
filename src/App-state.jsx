import React from "react";

class App extends React.Component {

  //初始化状态，里边的变量都是自定义的
  state = {
    type: "password",
    tips: "显示密码"
  }

  render() {
    return (
      <div>
        {/* 读取state中的数据 */}
        <input type={this.state.type}/>
        <button onClick={() => this.changeEvent()}>{this.state.tips}</button>
      </div>
    )
  }
  changeEvent() {
    if (this.state.type === "password") {
      // 修改状态
      this.setState({
        type: "text",
        tips: "隐藏密码",
      })
    } else {
      this.setState({
        type: "password",
        tips: "显示密码",
      })
    }
  }
}

export default App