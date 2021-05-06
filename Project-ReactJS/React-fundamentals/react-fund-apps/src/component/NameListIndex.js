import React from 'react';

function NameListIndex(props) {
    const names = ['Bruce', 'Diana', 'Tiler', 'Tiler']

    const nameList = names.map((name, index )=> <h2 key={index} > {index} {name} </h2>)
    //const nameList = names.map(name => <h2>{name}</h2>)
    return (
        <div>{nameList}</div>
    );
}

export default NameListIndex;