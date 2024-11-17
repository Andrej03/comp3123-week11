import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class PersonList extends Component {

    //Define state default values
    state = {
        persons: []
    }

     //Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ persons });
        })
    }	

    render() {
        return (
            <div className="person-list-container" id="person-list-container">
                <div className="title">
                    <h1>Person List</h1>
                </div>
                {this.state.persons.map((person, index) => (
                    <div key={index} className="person-card">
                        <div className="user-name-uuid">
                            <h3>{`${person.name.title} ${person.name.first} ${person.name.last} - ${person.login.uuid}`}</h3>
                        </div>
                        <div className="person-content">
                            <div className="person-image-container">
                                <img 
                                    src={person.picture.large} 
                                    alt={`${person.name.first} ${person.name.last}`} 
                                    className="person-image"
                                />
                                <button className="detailsbtn">
                                    Details
                                </button>
                            </div>
                            <div className="person-info">
                                <p><strong>User Name:</strong> {person.login.username}</p>
                                <p><strong>Gender:</strong> {person.gender.toUpperCase()}</p>
                                <p><strong>Time Zone Description:</strong> {person.location.timezone.description}</p>
                                <p><strong>Address:</strong> {`
                                ${person.location.street.number} 
                                ${person.location.street.name}, 
                                ${person.location.city}, 
                                ${person.location.state}, 
                                ${person.location.country} - ${person.location.postcode}
                                `}</p>
                                <p><strong>Email:</strong> {person.email}</p>
                                <p><strong>Birth Date and Age:</strong> {`${new Date(person.dob.date).toISOString()} (${person.dob.age})`}</p>
                                <p><strong>Register Date:</strong> {new Date(person.registered.date).toISOString()}</p>
                                <p><strong>Phone#:</strong> {person.phone}</p>
                                <p><strong>Cell#:</strong> {person.cell}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default PersonList;
