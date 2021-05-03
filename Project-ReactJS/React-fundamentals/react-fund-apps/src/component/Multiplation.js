import React, {Component} from 'react';

class Multiplation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count:0,
            multi: 1
        }
    }

    increment(){
        // this.state.count = this.state.count + 1;

        // this.setState(
        //     {
        //              count: this.state.count + 1
        //           },
        //     () => {
        //                     console.log('Callback value', this.state.count)
        //                   }
        //           )
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))

        console.log(this.state.count);
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    multi(){
       // this.state.multi = this.increment() *  this.increment();
       //  this.setState(
       //      {
       //          multi: this.state.multi * 2
       //      }
       //  )
        //console.log(this.state.multi);

        this.setState(prevMulti=>
             ({
               multi: prevMulti.multi * 2
             }))
        console.log(this.state.multi)
    }
    render() {
        return (
            <div>
                <div>
                    Count - {this.state.count}
                </div>
                <button onClick={() => this.increment()}>Increment</button>

                <div>
                    Multiple - {this.state.multi}
                </div>
                <button onClick={()=> this.multi()}> Multi</button>

            </div>
        );
    }
}

export default Multiplation;