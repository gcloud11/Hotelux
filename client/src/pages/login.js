import React, { Component } from 'react';
import fire from '../config/fire';

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: '',
            error: ''
        }

    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            this.setState({ error: error.message });
        });
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            this.setState({ error: error.message });
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
        <div className="col-md-6">
        <form>
        <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" class="form-text text-muted"></small>
            <p>{this.state.error}</p>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            <p>{this.state.error}</p>
        </div>

        <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
        <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>

        </form>
        </div>
        );
    }
}

export default Login;