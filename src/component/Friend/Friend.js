import React from 'react';
import './Friend.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret, faDollarSign,  faPhone } from '@fortawesome/free-solid-svg-icons';
const Friend = (props) => {

    const {name,img, Salary,username} = props.person;
    return (
        <div className="right-side">
            <div className="image">
                    <img src={img} alt=""/>
                
            </div>
            <div className="name">
                <h3>{name}</h3>
                <p><small><FontAwesomeIcon icon={faUserSecret}/> {username}</small></p>
                <p><small><FontAwesomeIcon icon={faDollarSign}/> {Salary}</small></p>
            </div>
            
        </div>
    );
};

export default Friend;