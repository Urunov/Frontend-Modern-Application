import React from 'react';
import Person from "./Person";

function NameList(props) {


    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Diana',
            age: 32,
            skill: 'Java'
        },
        {
            id: 3,
            name: 'Borus',
            age:45,
            skill: 'Spring Cloud'
        },
        {
            id: 4,
            name: 'Tonny',
            age:33,
            skill: 'Full Stack MSA'
        }
    ]

    const personList = persons.map(
            person => <Person  key = {person.id} person = {person}/>
        )
    return <div>{personList}</div>

        

    // const personList = persons.map(
    //     persons => (
    //         <h2>
    //         {/*I am {persons.name}. I am {persons.age} years old.*/}
    //         {/*I know very well {persons.skill}*/}
    //         </h2>
    //
    // ))


    // const names = ['Burce', 'Clark', 'Diana', 'Heracle']
    // const nameList = names.map(name=> <h2> {name} </h2>)
    // return (
    //     <div>
    //         {nameList}
    //
    //     </div>
    // );
}

export default NameList;