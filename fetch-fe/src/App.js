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
      stateError: '',
      occupationError: '',
      
    };
  }

  validateForm = () => {
    let nameError = '';
    let emailError = '';
    let passwordError = '';
    let stateError = '';
    let occupationError = '';

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

    if (!this.state.state) {
      stateError = 'State cannot be blank';
    }

    if (!this.state.occupation) {
      occupationError = 'Occupation cannot be blank'
    }

    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError, passwordError, stateError, occupationError });
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
        occupationError: '',
        stateError: '',
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
        <div className="title">Welcome</div>
        <div className="subtitle">Let's create your account!</div>
        <div className="input-container ic1">
          <input className="input"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div className="error">{this.state.nameError}</div>
        </div>
        <div className ="input-container ic2">
          <input className="input"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div className="error">{this.state.emailError}</div>
        </div>
        <div className="input-container ic2">
          <input className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div className="error">{this.state.passwordError}</div>
        </div>

        <div className="input-container ic2">
          <input className="input"
            name="occupation"
            placeholder="Occupation"
            value={this.state.occupation}
            onChange={this.handleChange}
          />
          <div className="error">{this.state.occupationError}</div>
        </div><div className="input-container ic2">
          <input className="input"
            name="state"
            placeholder="State"
            value={this.state.state}
            onChange={this.handleChange}
          />
          <div className="error">{this.state.stateError}</div>
        </div>

        <div className="input-container ic1">
        <button className="submit" type="submit">Submit</button>
        </div>
        
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
