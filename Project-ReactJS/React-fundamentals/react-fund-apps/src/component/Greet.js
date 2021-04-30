import React from 'react'

// function Greet(){
//     return <h2>React with</h2>
// }

const Greet = (props) => {
    console.log(props)
    return(
        <div>
            <h2>
               Hello My Friend:  {props.name} a.k.a {props.heroName}
            </h2>
            {props.children}
        </div>
    )
}
export default Greet;