import logo from './logo.svg';
import useState from 'react';
import './App.css';
import React from 'react';


class Form extends React.Component {
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
    };
  }

  validateForm = () => {
    let nameError = '';
    let emailError = '';
    let passwordError = '';

    if (this.state.name.length < 1) {
      nameError = 'Name cannot be blank';
    }

    // PLACEHOLDER
    if (!this.state.email.includes('@')) {
      emailError = 'Invalid email';
    }

    // PLACEHOLDER
    if (this.state.password.length < 6) {
      passwordError = 'Password must be at least 6 characters';
    }

    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validateForm();
    if (isValid) {
      console.log(this.state);
      // clear form on successful submit
      this.setState({
        name: '',
        email: '',
        password: '',
        nameError: '',
        emailError: '',
        passwordError: '',
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="centered">
      <form className="form" onSubmit={this.handleSubmit}>
        <div>
          <input
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div>{this.state.nameError}</div>
        </div>
        <div>
          <input
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div>{this.state.emailError}</div>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div>{this.state.passwordError}</div>
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}

export default Form;

// function App() {

//   // const [inputs, setInputs] = useState({});


//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//   }


//   const handleSumbit = (event) => {

//   }
//   function handleSubmit() {
//     var x = document.forms["myForm"]["name"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }
//   return (
//     <div className="wrapper centered">
//       <h1>Fetch FE Form</h1>
//       <form onSubmit={handleForm()}>
//         <label className="label"> Full Name:
//           <input className="input" 
//            type="text" 
//            name="name"
//            onChange={handleChange}/>
//         </label>
//         <input type="submit" value="Submit"/>
//       </form>
//     </div>
//   );
// }

// export default App;
