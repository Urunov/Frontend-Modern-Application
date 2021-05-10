import React from 'react';

// function FrInput(props) {
//     return (
//         <div>
//             <input type="text" />
//         </div>
//     );
// }

const FrInput = React.forwardRef((props, ref) =>{
    return(
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})
export default FrInput;