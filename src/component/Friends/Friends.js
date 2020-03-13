import React, { useState } from 'react';
import './Friends.css';
import Person from '../Person/Person';
import fakeData from '../../fakeData';
import Counter from '../Counter/Counter';

const Friends = (props) => {
    const first15 = fakeData;
    const [person, setPerson] =useState(first15);


    const [counter, setCounter] = useState([]);

    const handleAddPerson =(person)=>{
       const newCounter = [...counter,person];
       setCounter(newCounter);
    }

    return (
        <div className="head">
            <div className="left-bar">
                {
                    person.map(person=> <Person person={person} handleAddPerson={handleAddPerson}></Person>)
                }
            </div>
            <div className='right-bar'>
                <Counter counter={counter}></Counter>
            </div>
        </div>
    );
};

export default Friends;