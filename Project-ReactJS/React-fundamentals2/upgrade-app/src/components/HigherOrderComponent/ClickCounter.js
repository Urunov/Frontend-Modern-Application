import React, {Component} from 'react';
import UpdatedComponent from "./withCounter";
class ClickCounter extends Component {

    render() {
        const {count} = this.props

        return (
            <div>
                <button onClick={this.props.name}>Clicked {count} times</button>
            </div>
        );
    }
}

export default UpdatedComponent(ClickCounter);