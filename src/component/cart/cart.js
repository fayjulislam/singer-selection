import React from 'react';

const cart = (props) => {

    const { cart } = props;
    let total = 0;

    for (const singer of cart) {
        total = total + singer.salary;
    }

    return (

        // Selected Singer Area 
        <div className="sticky-top text-white mt-3">
            <div className="card bg-success">
                <div className="card-header">
                    <h4 className="text-center">Selected Singers</h4>
                </div>
                <div className="p-4 ">
                    <h5>Singer Added: <span className="text-warning fw-bold">{props.cart.length}</span></h5>
                    <h5 className="my-4">Total Cost: <span className="text-warning fw-bold">{total}</span></h5>
                    <h5 className="mb-3">Selected Singers:</h5>

                    {/* Display selected singer name in the cart area  */}

                    {
                        cart.map(name => <small >

                            <div className="d-flex justify-content-around border border-1 border-muted pt-2 " key={name.key + Math.random() + ""}>
                                <p>
                                    {name.name}
                                    <img className="ms-3" style={{ height: "30px", width: "30px", borderRadius: "50px" }} src={name.img} alt="" />
                                </p>
                            </div>

                        </small>)
                    }

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