import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

class App extends React.Component {
  footer = React.createRef()
  p1 = React.createRef()
  render() {
    return (
      <div className="App">
        <Header ref={this.header}></Header>
        <input type="text" ref={this.username} />
        <Footer ref={this.footer} />
        <p ref={this.p1}>hello, p</p>
        <button onClick={() => this.func1()}>点击按钮</button><br />
      </div>
    )
  }
  func1() {
    // console.log(this.refs.username.value)
    // console.log(this.refs.header)
    // console.log(this.footer.current)
    // console.log(this.p1.current)
    console.log(this.username);
    console.log(this.footer);
    console.log(this.p1);

  }
}

export default App