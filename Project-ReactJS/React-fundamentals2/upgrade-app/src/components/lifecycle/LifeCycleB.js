import React, {Component} from 'react';

class LifeCycleB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Khamdamboy'
        }
        console.log('LifeCycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB a getDerivedStateFromProps');
        return state
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount NOw')
    }

    render() {
        console.log('LifecycleB render')
        return (
            <div>
                LifeCycle B
            </div>
        );
    }
}

export default LifeCycleB;