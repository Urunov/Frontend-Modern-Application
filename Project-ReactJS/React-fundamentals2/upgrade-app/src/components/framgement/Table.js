import React from 'react';
import Column from "./Column";

function Table(props) {
    return (
        <table>
            <tbody>
            <tr>
                <Column />
            </tr>
            </tbody>
        </table>
    );
}

export default Table;