import React from 'react';

const cart = (props) => {

    const { cart} = props;
    let total = 0;

    for (const singer of cart) {
        total = total + singer.salary;
    }

    return (

        // Selected Singer Area 
        <div className="position-fixed text-white mt-3">
            <div className="card bg-success">
                <div className="card-header">
                    <h4 className="text-center">Selected Singers</h4>
                </div>
                <div className="p-4 ">
                    <h5>Singer Added: {props.cart.length}</h5>
                    <h6 className="my-4">Total Salary Cost: {total}</h6>
                    <h6>Singer Name: </h6>
                </div>
                <div className="card-footer">
                    <div className="text-center">
                        <button className="btn btn-warning fw-bold">Hire</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default cart;