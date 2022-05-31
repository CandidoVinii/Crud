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
    const { userName } = this.state;
    const { changeData } = this.props;
    changeData(userName);
    this.setState({
      logged: true,
    });
  };
  render() {
    const { userName, password, actionButton, logged } = this.state;
    return (
      <div className="flex justify-center text-zinc-900">
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-32'>
          <div className="w-72 h-72">
          {logged ? <Navigate to="/home" /> : ''}
          <h1 className="text-zinc-700 font-black text-center text-4xl">Login</h1>
            <div className='mb-6 mt-12'>
              <input
                type="text"
                className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline'
                placeholder="Digite seu usuário"
                name="userName"
                value={userName}
                onChange={this.handleChange}
              />
            </div>
            <div className='mb-6'>
              <input
                type="password"
                className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline'
                placeholder="Digite sua senha"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className='flex justify-center items-center'>
              <button
                disabled={actionButton}
                onClick={this.userClick}
                type='button'
                className='bg-sky-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              >
                Entrar
              </button>
            </div>
          </div>
        </form>
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
