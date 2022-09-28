import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import array from './array'

const Home = () => {

    let history = useNavigate();


    function setID(id, name, age) {
        localStorage.setItem('id', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Age', age);
    }


    function deleted(id) {
        var index = array.map(function (event) {
            return event.id;
        }).indexOf(id);
        array.splice(index, 1)
        history('/')
    }

    return (
        <>
            <div>
                <div style={{ margin: '10rem' }}>
                    <Table striped border hover size="sm" >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Edit/Update</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                array.map((item) => {
                                    return (
                                        <>

                                            <tr>
                                                <td>{item.Name}</td>
                                                <td>{item.Age}</td>
                                                <td><Link to={`/edit`}> <Button variant='info' onClick={(event) => setID(item.id, item.Name, item.Age)}>Update</Button></Link>  </td>
                                                <td><Button variant='danger' onClick={event => deleted(item.id)}>Delete</Button></td>

                                            </tr>

                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                    <Link to='/create' className='d-grid gap-2 text-decoration-none'>
                        <Button variant='warning' size='lg'>Create</Button>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default Home