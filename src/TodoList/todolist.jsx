import React, { Component } from 'react';
import "./todolist.css"

class TodoList extends Component {
    state = {
        tasks: [
            "学习HTML",
            "学习Javascript",
            "学习CSS",
            "学习Java",
        ],
    }
    textBtn = React.createRef()
    render() {
        return (
            <div className={'todo-list'}>
                <div className={'clear'}>
                    <input type="text" ref={this.textBtn} />
                    <button className={'add-btn'} onClick={() => {
                        this.addTask()
                    }}>添加</button>
                </div>
                <ul>
                    {
                        this.state.tasks.map((item, key) => {
                            return (
                                <li key={key}>
                                    <span>{item}</span>

                                    <span onClick={() => {
                                        this.delTask(key)
                                    }}>删除</span>

                                    <span onClick={()=>{
                                        this.upTask(key)
                                    }}>↑</span>

                                    <span onClick={()=>{
                                        this.downTask(key)
                                    }}>↓</span>
                                </li>
                            )
                        })
                    }
                    {
                        /* 基于逻辑运算符实现判断效果 */
                        this.state.tasks.length === 0 && <li className={'no-taks'}><span>暂时没有任何计划</span></li>
                    }
                </ul>
            </div>
        );
    }
    // 增加任务触发函数
    addTask() {
        console.log("----------")
        console.log(this.textBtn.current.value);
        const tasks = this.state.tasks.concat();
        tasks.unshift(this.textBtn.current.value)
        this.setState({
            tasks
        })
        this.textBtn.current.value = ""
    }

    // 删除任务触发函数
    delTask(key){
        console.log(key,this.state.tasks[key]);
        const tasks = this.state.tasks.concat();
        tasks.splice(key,1);
        this.setState({
            tasks
        })
    }

    upTask(key){
        if(key === 0) return
        const tasks = this.state.tasks
        const task = tasks.splice(key, 1)[0]
        tasks.splice(key-1,0,task)
        this.setState({
            tasks
        })
    }

    downTask(key){
        if(key === 0) return
        const tasks = this.state.tasks
        const task = tasks.splice(key, 1)[0]
        tasks.splice(key+1,0,task)
        this.setState({
            tasks
        })
    }
}

export default TodoList;