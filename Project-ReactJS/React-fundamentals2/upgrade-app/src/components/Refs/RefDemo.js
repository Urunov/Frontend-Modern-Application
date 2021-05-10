import React, {Component} from 'react';

class RefDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        if(this.cbRef) {
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log('Current ', this.inputRef)
    }
    clickHandler = () =>{
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <p>There are refs</p>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setCbRef}/>
                <button onClick={this.clickHandler} > Click Me </button>
            </div>
        );
    }
}

export default RefDemo;