import Users from "./components/usercard";
import './App.css';
import React, { Component } from 'react'
import LGM from './components/lgm.jpeg'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users_data: ([]),
            loading: false
        }


        this.updateState = this.updateState.bind(this)
    }

    updateState() {

        this.setState({ loading: true });

        setTimeout(async function () {

            const response = await fetch("https://reqres.in/api/users?page=1");
            const jsonresponse = await response.json();
            console.log(jsonresponse)
            this.setState({ users_data: jsonresponse["data"], loading: false });
        }.bind(this), 2000);
    }

    render() {
        return (
            <>
                <nav className="navbar" >
                    <div className="navitems">
                    <img src={LGM} style={{width: 200}} alt=""/>
                        <img ></img>
                        <button className="fetchbtn" onClick={this.updateState} > Get Users </button>
                    </div>
                </nav>
                <div className="userdatacontainer">
                    <
                        Users loading={this.state.loading}
                        users={this.state.users_data}
                    />
                </div >

            </>
        );
    }
}

export default App;
