import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Banner extends Component{
    render(){
        console.log(this.props);
        return (
            <div>
                {/* 这里这样写只是为了避免插件检查语法错误时把这个认为是错误 */}
                接受父组件传过来的数据：{this.props.msg} ==={'>'} {this.props.num}
            </div>
        )
    }
}

Banner.protoTypes = {
    msg:PropTypes.string.isRequired
}

export default Banner;