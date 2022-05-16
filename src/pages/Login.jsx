import React from 'react';
import { Navigate } from 'react-router-dom';
import { Component } from 'react';
import { changeLogin } from '../redux/action/action';
import { connect } from 'react-redux';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      password: '',
      actionButton: true,
    };
  }

  validate = () => {
    const { userName, password } = this.state;
    if (userName.length > 3 && password.length > 3) {
      return this.setState({
        actionButton: false,
      });
    }
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.validate();
  };
  userClick = () => {
    const { userName, password } = this.state;
    const { changeData } = this.props;
    changeData({ userName, password });
    this.setState({
      logged: true,
    });
  };
  render() {
    const { userName, password, actionButton, logged } = this.state;
    return (
      <div>
        {logged ? <Navigate to="/home" /> : ''}
        <h1>Login</h1>
        <div>
          <input
            type="text"
            placeholder="Digite seu usuário"
            name="userName"
            value={userName}
            onChange={this.handleChange}
          />

          <input
            type="password"
            placeholder="senha"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <button disabled={actionButton} onClick={this.userClick}>
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeData: (state) => {
    dispatch(changeLogin(state));
  },
});

export default connect(null, mapDispatchToProps)(Login);
