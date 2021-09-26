import React, { useEffect, useState } from 'react';
import Cart from '../cart/cart';
import Singer from './Singer/Singer';

const Singers = () => {
    const [singers, setSingers] = useState([]);
    const [cart, setCart] = useState([]);

    // Load Data from json file 
    useEffect(() => {
        fetch('./fake-data.JSON')
            .then(res => res.json())
            .then(data => setSingers(data))
    }, [])

    // Handle Select Button 
    const handleSelectBtn = (singer) => {
        const newCart = [...cart, singer];
        setCart(newCart);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <div className="row">

                        {/* Display Data in UI  */}
                        {
                            singers.map(singer => <Singer

                                key={singer.key}
                                singer={singer}
                                handleSelectBtn={handleSelectBtn}

                            ></Singer>)
                        }
                    </div>
                </div>

                {/* Cart Section  */}
                <div className="col-md-3">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Singers;