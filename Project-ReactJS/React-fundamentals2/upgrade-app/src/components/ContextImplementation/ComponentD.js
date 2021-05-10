import React, {Component} from 'react';
import {UserConsumer} from "./userContext";


class ComponentD extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {
                        username => {
                            return <div> Hello Component D:  {username}</div>
                        }
                    }
                </UserConsumer>
            </div>
        );
    }
}

export default ComponentD;