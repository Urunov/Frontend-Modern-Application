import React, {Component} from 'react';

class UserGreeting extends Component {
    constructor(props) {
        super(props);

        this.state ={
            isLoggedIn: true

        }
    }

    render() {
        return this.state.isLoggedIn && <div>Welcome to Canada</div> // only one case working well
       // return this.state.isLoggedIn ? (
       //      <div>Welcome to Korea</div>
       //     ) : (
       //         <div>Welcome to Tashkent </div>
       //    )

        // let message;
        //
        // if(this.state.isLoggedIn){
        //      message = <div>  Welcome to Korea  </div>
        // } else {
        //       message =  <div> Welcome toTashkent </div>
        // }
        //
        // return <div>{message}</div>

    }
}

export default UserGreeting;