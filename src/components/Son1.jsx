import React, {Component} from 'react';

class Son1 extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.changeNum(this.props.num+1)}>子组件, num={this.props.num}</button>
            </div>
        );
    }
}

export default Son1;