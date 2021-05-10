import React, {Component, PureComponent} from 'react';
import RegularComp from "./RegularComp";
import Pure from "./Pure";
import MemoComp from "../memo/MemoComp";

class ParentComp extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            name: 'Urunov'
        }
    }

    componentDidMount() {
        setInterval(()=>{
            this.setState({
                name: 'Hamdamboy'
            })
            }, 2000)
    }

    render() {
        console.log('********************  Parent   Component render ***************************************')
        return (
            <div>
                Parent Components
                <MemoComp name={this.state.name}/>
                {/*<RegularComp name = {this.state.name} />*/}
                {/*<Pure name = {this.state.name} />*/}
            </div>
        );
    }
}

export default ParentComp;