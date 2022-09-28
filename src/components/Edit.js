import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import array from './array';

const Edit = () => {

    const [name, setname] = useState('');
    const [age, setage] = useState('');
    const [id, setid] = useState('');

    let history = useNavigate();

    var index = array.map(function (event) { return event.id; }).indexOf(id);


    const handleSubmit = (event) => {
        event.preventDefault();

        let a = array[index]
        a.Name = name
        a.Age = age
        history('/');
    }

    useEffect(() => {
        setname(localStorage.getItem('Name'))
        setage(localStorage.getItem('Age'))
        setid(localStorage.getItem('id'))
    }, [])



    return (
        <>
            <div>
                <Form className="d-grid gap-2" style={{ margin: '15rem' }}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Enter Name" value={name} onChange={event => setname(event.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Control type="text" placeholder="Enter Age" value={age} onChange={event => setage(event.target.value)} />
                    </Form.Group>


                    <Button size="lg" variant="primary" type="submit" onClick={event => handleSubmit(event)}>Submit</Button>
                    <Link className="d-grid gap-2 text-decoration-none" to='/'>      <Button variant="warning" size="lg">Home</Button></Link>

                </Form>
            </div>
        </>
    )
}

export default Edit