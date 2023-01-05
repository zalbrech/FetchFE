import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const MyForm = () => {

    const handleSubmit = () => {

        console.log('submit');
    };

    return (
        <div className = "h-100 justify-content-center align-items-center form">
            <div className="title">Welcome</div>
            <div className="subtitle">Please complete the form to sign up!</div>
            <Form onSubmit={handleSubmit}>
                {/* name */}
                <Form.Group className="ic1 mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-white">Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter first and last name" />
                </Form.Group>
                {/* email */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-white">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                {/* password */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="text-white">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Text className="text-muted">
                        Passowrd must be at least 6 characters long.
                    </Form.Text>
                </Form.Group>

                {/* occupation */}
                <Form.Group className="ic2">
                    <Form.Label className="text-white">Occupation</Form.Label>
                <Form.Select className="text-center">
                    <option>-- Select Occupation --</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </Form.Group>
                

                {/* state */}
                <Form.Group className="ic1">
                    <Form.Label className="text-white">State</Form.Label>
                <Form.Select className="text-center">
                    <option>-- Select State of residence --</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </Form.Group>
                

                <Button className="submit" variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default MyForm