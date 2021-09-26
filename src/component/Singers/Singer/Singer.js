import React from 'react';
import './Singer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';

const Singer = (props) => {

    const { name, age, university, voiceType, img, salary } = props.singer;

    // Fontawesome Icons  
    const fbIcon = <FontAwesomeIcon icon={faFacebook} />
    const instaIcon = <FontAwesomeIcon icon={faInstagram} />
    const spotyIcon = <FontAwesomeIcon icon={faSpotify} />
    const selectIcon = <FontAwesomeIcon icon={faCheckCircle} />

    return (

        // Single Singer Info Section 

        <div className="col-md-4 mb-3 mt-3">
            <div className="card">
                <img className="logo mx-auto mt-3" src={img} alt="" />
                <div className="text-center">
                    <div className="card-body">
                        <h6>Name: {name}</h6>
                        <p>Age: {age}</p>
                        <p>University: {university}</p>
                        <p>Voice Type: {voiceType}</p>
                        <h6>Salary: {salary}</h6>
                        <div className="social-icon">
                            <span>{fbIcon}</span> <span>{instaIcon}</span> <span>{spotyIcon}</span>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="row p-2">
                            <button
                                onClick={() => props.handleSelectBtn(props.singer)}
                                className="btn btn-outline-success fw-bold">{selectIcon}  Select</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singer;