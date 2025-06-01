import React from "react";
import GlobalContext from "./context";

class Header extends React.Component {
    render() {
        return (
            <GlobalContext.Consumer>
                {
                    (context) => {
                        return (
                            <div>
                                <button onClick={() => {
                                    //后发布
                                    context.update_num(context.num + 1)
                                }}>修改数据 </button>
                                我是Header中的头部内容,num={context.num}
                            </div>
                        )
                    }
                }

            </GlobalContext.Consumer>

        )
    }
}

export default Header;