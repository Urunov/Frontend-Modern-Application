
import React, {Component} from 'react';

class Welcome extends Component{

    render() {
        const {name, heroName} = this.props
      //  const {state1, state2} = this.state
        return (
            <h2>Welcome {name} a.k.a {heroName}</h2>
        )
    }
}

export default Welcome