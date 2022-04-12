import React, { useState } from 'react';

const Shipment = () => {


    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [address, setaddress] = useState('');
    //const [error, seterror] = useState('');

    const handlename = (e) => {
        setname(e.target.value);
    }
    const handleemail = (e) => {
        setemail(e.target.value);
    }
    const handleaddress = (e) => {
        setaddress(e.target.value)
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        const shipping = { name, email, address}
        console.log(shipping);
    }
    return (
        <div className='form_container'>
            <div>
                <h2 className="from_title">shiping </h2>
                <form onSubmit={handlesubmit}>
                    <div className="input_group">
                        <label htmlFor="name">name</label>
                        <input onBlur={handlename} type="text" name='name' id='' />
                    </div>
                    <div className="input_group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleemail} type="email" name='email' id='' />
                    </div>
                    <div className="input_group">
                        <label htmlFor="address">address</label>
                        <input onBlur={handleaddress} type="text" name='address' id='' />
                    </div>
                    <input type="submit" value="payment" className='form_submit' />
                </form>
                <p>

                </p>
            </div>

        </div>
    );
};

export default Shipment;