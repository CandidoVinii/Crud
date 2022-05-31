import React from 'react';
import { connect } from 'react-redux';
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
    const { stateLogin: user } = this.props; 
    const { task, addBtn } = this.state;

    return (
      <div>
        <h1>TO-DO LIST</h1>
        <p>{`Olá ${user.userName}, aqui estão suas tarefas `}</p>
        <form action="">
          <input
            value={task}
            name="task"
            type="text"
            onChange={this.handleChange}
            placeholder="digite uma nova tarefa"
          />
          <button type="button" disabled={addBtn} onClick={this.handleClick}>
            Adicionar
          </button>
        </form>
        <Tasks />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stateLogin: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  changeData: (state) => {
    dispatch(changeTasks(state));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
