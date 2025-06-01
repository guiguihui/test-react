import React, {Component} from 'react';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

// 把要多个子组件要共享的数据，保存到这些子组件的公共父级组件，这就是状态提升
class App extends Component {
    state = {
        num: 100,
    }
    render() {
        return (
            <div>
                <Header num={this.state.num} update={this.updateNum.bind(this)}></Header>
                <Footer num={this.state.num} update={this.updateNum.bind(this)}></Footer>
            </div>
        );
    }
    updateNum(num){
        this.setState({
            num: num
        })
    }
}

export default App;