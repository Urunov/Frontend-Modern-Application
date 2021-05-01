import React from 'react'

// function Greet(){
//     return <h2>React with</h2>
// }

const Greet = props => {
    console.log(props)
    const {name, heroName} = props
    return(
        <div>
            <h2>
               Hello My Friends:  {props.name} a.k.a {props.heroName}
            </h2>
            {props.children}
        </div>
    )
}
export default Greet;