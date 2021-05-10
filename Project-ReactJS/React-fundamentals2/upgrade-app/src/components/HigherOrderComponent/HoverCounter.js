import React, {Component} from 'react';
import UpdatedComponent from "./withCounter";
class HoverCounter extends Component {

    render() {
        const {count, incrementCount} = this.props

        return (
            <div>
                <button onClick={incrementCount}>Click {count} times</button>

                <h2 onMouseOver={incrementCount}> Hovered  {count} Times</h2>
            </div>
        );
    }
}

export default UpdatedComponent(HoverCounter);