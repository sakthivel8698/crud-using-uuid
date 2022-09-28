import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { v4 as uuid } from 'uuid';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import array from './array';

const Create = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    let history = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();

        const ids = uuid()
        let uni = ids.slice(0, 8)
        console.log("fdfd", uni);
        let a = name, b = age;
        array.push({ id: uni, Name: a, Age: b })

        history('/')

    }
    return (
        <>
            <div>

                <Form className="d-grid gap-2" style={{ margin: '15rem' }}>
                    <h2 className='text-center text-warning'>Enter your data</h2>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Enter Name" onChange={event => setName(event.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Control type="text" placeholder="Enter Age" onChange={event => setAge(event.target.value)} />
                    </Form.Group>


                    <Button variant="primary" type="submit" size="lg" onClick={event => handleSubmit(event)}>Submit</Button>

                    <Link className="d-grid gap-2 text-decoration-none" to='/'>
                        <Button variant="info" size="lg">Home</Button>
                    </Link>

                </Form>
            </div>

        </>
    )
}

export default Create