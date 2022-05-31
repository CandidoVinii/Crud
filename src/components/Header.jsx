import React, { Component } from 'react'
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const {stateLogin: user} = this.props;
    return (
      <header className='bg-white shadow-md rounded text-zinc-900 flex justify-between'>
        <h1 className='font-black'>TO-DO LIST</h1>
        <p>{`Olá ${user.userName}, aqui estão suas tarefas `}</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  stateLogin: state.user,
});

export default connect(mapStateToProps)(Header);