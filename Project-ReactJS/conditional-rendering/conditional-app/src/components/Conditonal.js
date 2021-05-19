import React, {Component} from 'react';

class Conditonal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        }

    }

    render() {
        let {isLoggedIn} = this.state

        const renderAuthButton =() => {
            if(isLoggedIn) {
                return <button>Logout </button>;
            } else {
                return <button>Login</button>
            }
        }


        return (
            <div className="constructor">
                <h3>
                    This is a Conditional showing several way to implement
                </h3>
                {renderAuthButton()}
            </div>
        );
    }
}

export default Conditonal;