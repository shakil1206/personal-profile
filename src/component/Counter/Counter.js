import React from 'react';
import './Counter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield } from '@fortawesome/free-solid-svg-icons'
import Friend from '../Friend/Friend';

const Counter = (props) => {

   const counter = props.counter;

   console.log(counter);
   let totalSalary=0;

   for(let i=0; i<counter.length; i++){
       const person = counter[i];
       totalSalary = totalSalary + Number(person.Salary);
   }

    return (
        <div>
            <div className="container">
            
                <h1><FontAwesomeIcon icon={faUserShield}/> Friends</h1>
                <p>Total Friends : {counter.length}</p>
                <p>Total Salary  : {totalSalary}</p>

                {
                    counter.map(person=> <Friend person={person}></Friend>)
                }
            </div>
        </div>
    );
};

export default Counter;