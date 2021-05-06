import React, {useState} from 'react';
import data from "./data"
import SingleQuestion from './Questions'

function Main() {
    const [questions] = useState(data);
    return (
        <main>
            <div className='container'>
                <h2> Questions and Answer</h2>
                 <section className='info'>
                    {
                     questions.map((question)=> {
                        return (<SingleQuestion key={question.id} {...question}/>);
                    })
                    }
                 </section>
            </div>
        </main>
    );
}

export default Main;