import React, { Component } from 'react';

class Box extends Component {
    render() {
        return (
            <div style={{
                height: "350px",
                width: "600px",
                display: "fiexd",
                top: "50px",
                margin: "auto",
                background: "#eee",
                borderRadius: "8px",
                padding: "15px 25px",
                boxShadow: "0px 15px 10px 5px gray",
            }}>
                {/*提取父组件传递进来的插槽内容*/}
                {this.props.children[0]}
                <hr />
                {this.props.children.map((item, key) => {
                    if (key !== 0) {
                        return this.props.children[key]
                    }
                })}
            </div>
        )
    }
}

class App extends Component {
    state = {
        num: 100,
        show_box: false
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setState({
                    show_box: !this.state.show_box
                })}>按钮</button>
                {this.state.show_box && <Box>
                    <h1>标题</h1>
                    <p>对不起，您拨打的号码是空号！{this.state.num}</p>
                    <p>对不起，您拨打的号码是空号！{this.state.num}</p>
                    <p>对不起，您拨打的号码是空号！{this.state.num}</p>
                    <p>对不起，您拨打的号码是空号！{this.state.num}</p>
                </Box>
                }
            </div>
        );
    }
}

export default App;