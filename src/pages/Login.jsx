import React from "react";
import { Navigate } from "react-router-dom"
import { Component } from "react";
import { changeLogin } from "../redux/action/action";
import { connect } from "react-redux";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      actionButton: true,
    }
  }

  validate = () => {
    const { email, password } = this.state;
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(email) && password.length > 3) {
      return this.setState({
        actionButton: false,
      });
    }
  }

  handleChange = ({ target }) => {
    const {name, value} = target;
    this.setState({
      [name]: value,
    });
    this.validate();
  }
  userClick = () => {
    const { email, password } = this.state;
    const { changeData } = this.props;
    changeData({ email, password });
    this.setState({
      logged: true,
    })
  }
  render() {
    const { email, password, actionButton, logged } = this.state;
    return (
      <div>
        {
          logged ? <Navigate to="/home" /> : ''
        }
        <h1>Login</h1>
        <div>
          <input
            type="text"
            placeholder="email"
            name="email"
            value={ email }
            onChange={ this.handleChange } />

          <input
            type="password"
            placeholder="senha"
            name="password"
            value={ password }
            onChange={ this.handleChange } />
        </div>
        
        <div>
          <button
            disabled={ actionButton }
            onClick={ (this.userClick) }
          >
            Entrar
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeData: (state) => { dispatch(changeLogin(state)); },
});

export default connect(null, mapDispatchToProps)(Login);