import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
               <button onClick={()=>{this.props.update(this.props.num+1)}}>修改数据</button>
               <p>脚部组件,num={this.props.num}</p>
            </div>
        );
    }
}

export default Header;