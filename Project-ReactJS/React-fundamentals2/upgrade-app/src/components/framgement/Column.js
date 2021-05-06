import React from 'react';

function Column(props) {
    const items = []
    return (
        <>
            {
                items.map( items => (
                   <React.Fragment key = {items.id}>
                        <h1> Title</h1>
                        <p> {items.title}</p>
                  </React.Fragment>
                ))
            }
            <td> Name</td>
            <td> Age</td>

        </>
    );
}

export default Column;