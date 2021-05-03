import React, {Component} from 'react';
import ChildComponent from "./ChildComponent";

class ParentComponents extends Component {

    constructor(props) {
        super(props);

        this.state = {
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childName){
        //alert('Hello' + this.state.parentName)     // es5
        alert(`Hello ${this.state.parentName} from ${childName}`)  // es6
    }




    render() {
        return (
            <div>
              <ChildComponent greetHandler = {this.greetParent} />

            </div>
        );
    }
}

export default ParentComponents;