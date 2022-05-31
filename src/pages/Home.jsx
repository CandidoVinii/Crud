import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Tasks from '../components/Tasks';
import { changeTasks } from '../redux/action/action';

const INITIAL_STATE = {
  task: '',
  addBtn: true,
};
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {...INITIAL_STATE};
  }

  handleChange = ({ target }) => {
    this.validateInput();
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  validateInput = () => {
    const { task } = this.state;
    if (task.length === 0) {
      this.setState({ addBtn: false });
    }
    this.setState({ addBtn: false });
  };

  clearState = () => (this.setState({ ...INITIAL_STATE }));

  handleClick = () => {
    const { task } = this.state;
    const { changeData } = this.props;
    this.clearState();
    changeData({task});
  }

  render() {
    const { task, addBtn } = this.state;

    return (
      <>
      <Header />
      <div className='mt-16 flex justify-center'>
        <div className='bg-white shadow-md rounded text-zinc-900 px-8 pt-6 pb-8 mb-4 my-32'>
          <form className='flex mt-8 justify-center items-center'>
            <input
              value={task}
              name="task"
              className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline'
              type="text"
              onChange={this.handleChange}
              placeholder="digite uma nova tarefa" />
            <button
              type="button"
              disabled={addBtn}
              className='bg-sky-400 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline'
              onClick={this.handleClick}
            >
              Adicionar
            </button>
          </form>
          <Tasks />
        </div>
      </div></>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeData: (state) => {
    dispatch(changeTasks(state));
  },
});

export default connect(null, mapDispatchToProps)(Home);
