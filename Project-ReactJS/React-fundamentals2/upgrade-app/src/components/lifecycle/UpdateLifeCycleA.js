import React, {Component} from 'react';
import UpdateLifeCycleB from "./UpdateLifeCycleB";
class UpdateLifeCycleA extends Component {
    //
    constructor(props) {
        super(props);

        this.state = {
            name: 'Onajonim'
        }
        console.log('Lifecycle A constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle A getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Lifecycle A componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleA should component Update')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycle A should component Before Update')
        return null
    }

    changeState = () => {
        this.setState({
            name: 'Code evaluvation'
        })
    }

    render(){
        console.log('Lifecycle A render')
        return (
            <div>
                <div>
                    <div> Lifecycle A </div>
                    <button onClick={this.changeState}> Change</button>

                </div>
                <UpdateLifeCycleB/>
            </div>
        );
    }
}

export default UpdateLifeCycleA;