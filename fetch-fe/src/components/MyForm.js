import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MyModal from './MyModal';


class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            occupation: '',
            state: '',
            nameError: '',
            passwordError: '',
            emailError: '',
            stateError: '',
            occupationError: '',
        };

        this.occupations = {};
        this.states = {};

        console.log('in constructor');

        this.populateArrays();
    }

    populateArrays = async () => {
        // console.log('rest api called');
        const response = await fetch("https://frontend-take-home.fetchrewards.com/form");
        const jsonResponse = await response.json();
        console.log(jsonResponse);

        this.theOccupations = jsonResponse.occupations;
        this.theStates = jsonResponse.states;
        // console.log(this.theOccupations);
        // console.log(this.theStates);
    };

    validateForm = () => {
        console.log('validate form');
        let nameError = '';
        let emailError = '';
        let passwordError = '';
        let stateError = '';
        let occupationError = '';

        if (this.state.name.length < 1) {
            console.log("name error")
            // console.log(this.state.name);
            nameError = 'Name cannot be blank';
        }

        // PLACEHOLDER
        if (!this.state.email.includes('@')) {
            console.log("email error")

            emailError = 'Invalid email';
        }

        // PLACEHOLDER
        if (this.state.password.length < 6) {
            console.log("password error")

            passwordError = 'Password must be at least 6 characters';
        }

        if (!this.state.state) {
            console.log("state error")

            stateError = 'State cannot be blank';
        }

        if (!this.state.occupation) {
            console.log("occupation error")

            // console.log(this.theOccupations);
            occupationError = 'Occupation cannot be blank'
        }

        if (emailError || nameError || passwordError || stateError || occupationError) {
            this.setState({ emailError, nameError, passwordError, stateError, occupationError });
            return false;
        }

        return true;
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log("handle submit");
        const isValid = this.validateForm();
        // console.log(isValid);
        if (isValid) {
            // clear form on successful submit
            this.setState({
                name: '',
                email: '',
                password: '',
                occupation: '',
                state: '',
                nameError: '',
                emailError: '',
                passwordError: '',
                occupationError: '',
                stateError: '',
            });

            console.log(this.state.name);
            this.openModal();
        }
    };

    handleChange = (event) => {
        // console.log(event)
        // console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
    };


    openModal() {
        console.log('opening modal');
    }


    render() {
        return (
            <div className="h-100 justify-content-center align-items-center form">
                <div className="title">Welcome</div>
                <div className="subtitle">Please complete the form to sign up!</div>
                <Form onSubmit={this.handleSubmit}>

                    {/* name */}
                    <Form.Group className="ic1 mb-3" controlId="formBasicEmail" >
                        <Form.Label className="text-white">Name</Form.Label>
                        <Form.Control name="name"
                            type="name"
                            value={this.state.name}
                            placeholder="Enter first and last name"
                            onChange={this.handleChange} isInvalid={this.state.nameError} />
                        <Form.Control.Feedback type="invalid">
                            Please enter your name
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* email */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-white">Email address</Form.Label>
                        <Form.Control name="email"
                            type="email"
                            value={this.state.email}
                            placeholder="Enter email"
                            onChange={this.handleChange} isInvalid={this.state.emailError} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid email
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* password */}
                    <Form.Group className="mb-3" controlId="formBasicPassword" >
                        <Form.Label className="text-white">Password</Form.Label>
                        <Form.Control name="password"
                            type="password"
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.handleChange} isInvalid={this.state.passwordError} />
                        <Form.Text className="text-muted">
                            Passowrd must be at least 6 characters long.
                        </Form.Text>
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid password
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* occupation */}
                    <Form.Group className="ic2" >
                        <Form.Label className="text-white">Occupation</Form.Label>
                        <Form.Select name="occupation" className="text-center"
                            value={this.state.occupation}
                            onChange={this.handleChange} isInvalid={this.state.occupationError}>
                            <option>-- Select Occupation --</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Please select an occupation
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* state */}
                    <Form.Group className="ic1" >
                        <Form.Label className="text-white">State</Form.Label>
                        <Form.Select name="state" className="text-center"
                            value={this.state.state}
                            onChange={this.handleChange} isInvalid={this.state.stateError}>
                            <option>-- Select State of residence --</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Please enter a state
                        </Form.Control.Feedback>
                    </Form.Group>


                    <Button className="submit"
                        variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <MyModal />
            </div>
        )
    }
}

export default MyForm