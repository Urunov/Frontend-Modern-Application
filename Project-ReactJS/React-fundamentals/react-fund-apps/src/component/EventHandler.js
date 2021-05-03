import React, {Component} from 'react';

class EventHandler extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: 'hello'
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Good days'
    //     })
    //     console.log(this);
    //
    // }

    clickHandler = () => {
        this.setState({
            message: 'Good days again'
        })
    }
    render() {
        return (
            <div>
                <div> {this.state.message}</div>
              {/*<button onClick={this.clickHandler.bind(this)}>Click </button>*/}
              {/*<button onClick={() => this.clickHandler()}>Click </button>*/}
              <button onClick={this.clickHandler}>Click </button>


            </div>
        );
    }
}

export default EventHandler;