import React, { Component } from 'react';
import Header from "./Header-context.jsx";
import Footer from "./Footer-context.jsx";
import GlobalContext from './context.jsx';

class App extends Component {
    state = {
        num: 100,
    }

    render() {
        return (
            <GlobalContext.Provider value={{
                num: this.state.num,
                update_num: (value) => {
                    this.setState({
                        num: value
                    })
                }
            }}>
                <div>
                    <Header></Header>
                    <Footer></Footer>
                </div>
            </GlobalContext.Provider>
        );
    }
}

export default App;