//创建一个对象 `bus`；
//其中的 `list` 是一个数组，用于保存所有订阅者（订阅回调函数）；
//它的本质是：**回调函数列表**。
const bus={
    list:[],
    subscribe(callback){
        bus.list.push(callback)
    },

    //`publish` 是发布函数；
    //它会遍历所有已订阅的回调函数 `fn`，并将传入的参数 `value` 作为参数调用这些函数；
    //即：**广播事件值，通知所有订阅者**。
    publish(value){
        //如果 fn 为真（即存在且是函数），就执行 fn(value)；
        //fn=>fn这个就是箭头函数的简写形式
        //function(fn) {
        //    if (fn) {
        //        fn(value);
        //    }
        //}
        bus.list.forEach(fn=>fn && fn(value))
    }
}

export default bus;