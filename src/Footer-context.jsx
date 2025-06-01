import React from "react";
import GlobalContext from "./context";

class Footer extends React.Component {
    render() {
        console.log("渲染")
        return (
            <GlobalContext.Consumer>
                {
                    (context) => {
                        return (
                            <div>
                                <button onClick={() => {
                                    context.update_num(context.num + 1)
                                }}>修改数据 </button>
                                我是Footer中的脚部内容,num={context.num}
                            </div>
                        )
                    }
                }
            </GlobalContext.Consumer>

        )
    }
}

export default Footer;