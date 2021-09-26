import React from 'react';
import './Singer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Singer = (props) => {

    const { name, age, university, voiceType, img, salary } = props.singer;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
    const fbIcon = <FontAwesomeIcon icon={faFacebook} />


    return (
        <div className="col-md-4 mb-3 mt-3">
            <div className="card">
                <img className="logo mx-auto mt-3" src={img} alt="" />
                <div className="text-center">
                    <div className="card-body">
                        <h6>Name: {name}</h6>
                        <p>Age: {age}</p>
                        <p>University: {university}</p>
                        <p>Voice Type: {voiceType}</p>
                        <p>Salary: {salary}</p>
                        <span><h3 className="text-primary">{fbIcon}</h3></span> 
                    </div>
                    <div className="card-footer">
                        <div className="row p-2">
                            <button
                                onClick={ () => props.handleSelectBtn(props.singer)}
                            className="btn btn-outline-success fw-bold">{cartIcon}  Select</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singer;