import React, {Component} from 'react';

class UpdateLifeCycleB extends Component {

    constructor(props) {
        super(props);
    }

    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle B getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Lifecycle B componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('Lifecycle B should component Update')
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('LifeCycle B should component Before Update')
        return null
    }


    render() {
        console.log('LifecycleB rendering now')
        return (
            <div>
                 Lifecycle B
            </div>
        );
    }
}

export default UpdateLifeCycleB;