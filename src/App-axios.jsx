import React, { Component } from 'react';
import axios from "axios";
// import "./style.css"
// rest风格操作
// axios.post(url="",data={},options={})  // 创建、新增、上传
// axios.get(url="", options={})          // 读取、拉取、下载
// axios.put(url="",data={},options={})   // 更新数据[整体数据] 修改用户信息[age, nickname, avatar]
// axios.patch(url="",data={},options={}) // 更新数据[部分数据] 修改密码，更换头像[单一字段的修改]
// axios.delete(url="", options={})       // 删除、废弃、移除、清空
// 返回值 promise对象，异步回调对象

class App extends Component {
    state = {
        city: "北京",
        weather_data: [],
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.city} onChange={(event) => this.setState({
                    city: event.target.value
                })} />
                <button onClick={() => this.get_weather()}>查询</button>
                <table style={{
                    width: "600px",
                    border: "1px solid red"
                }}>
                    <tbody>
                        <tr style={{ border: "1px solid red" }}>
                            <td>日期</td>
                            <td>情报</td>
                        </tr>
                        {
                            this.state.weather_data.map((item, key) =>
                                <tr key={key}>
                                    <td>{item.date}</td>
                                    <td>{item.day.narrative}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }

    get_weather() {
        // 获取指定地区的天气信息
        //curl "http://v1.yiketianqi.com/api?unescape=1&version=v91&appid=&appsecret="
        axios.get(`https://v0.tianqiapi.com/?version=day&unit=m&language=zh&query=${this.state.city}&appid=43656176&appsecret=I42og6Lm`).then(response => {
            console.log(response.data.month)
            this.setState({
                weather_data: response.data.month
            });
        })
    }
}

export default App;