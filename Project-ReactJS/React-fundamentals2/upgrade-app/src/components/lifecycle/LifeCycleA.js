import React, {Component} from 'react';
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
    //

    /*
    *  constructor (props) - Called right before the changes from the virtual DOM are to be reflected in the DOM
    * */
    constructor(props) {
        super(props);
        this.state = {
            name: 'Urunov'
        }
        console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA a getDerivedStateFromProps');
        return state
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount Now')
    }
         /*
        *  constructor (props) - Called right before the changes from the virtual DOM are to be reflected in the DOM
        * */
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>  LifeCycle A </div>
                <LifeCycleB />
            </div>
        );
    }
}

export default LifeCycleA;