import React from 'react';
import './Person.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret, faDollarSign,  faPlusCircle,faPhone, faPaperPlane, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

const Person = (props) => {

    const {name,img,username,Salary,phone,email,address} = props.person;

    return (
        <div className="main-container">
            <div className="image-container">
                <img src={img} alt={name}/>
            </div>
            <div className="margin">
                <h2>{name}</h2>
                <h4><FontAwesomeIcon icon={faUserSecret} /> {username}</h4>
                <h4><FontAwesomeIcon icon={faDollarSign}/> {Salary}</h4>
                <button className="button-style"
                    onClick={()=>props.handleAddPerson(props.person)}
                > 
                    <FontAwesomeIcon icon={faPlusCircle}/> Add Me</button>
            </div>
            <div className="margin margin-right">
                <p><small><FontAwesomeIcon icon={faPhone}/> {phone}</small></p>
                <p><small><FontAwesomeIcon icon={faPaperPlane}/> {email}</small></p>
                <p><strong>Address <FontAwesomeIcon icon={faMapMarkedAlt}/></strong></p>
                <p><small>{address.street+", "+ address.suite}</small></p>
                <p><small>{address.city+", "+ address.zipcode}</small></p>                
            </div>
        </div>
    );
};

export default Person;
