import React from 'react';
import { connect } from 'react-redux';
import { changeTasks } from '../redux/action/action';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: '',
      saveTask: [],
    }
  }
  
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }
  
  handleClick = () => {
    const { saveTask } = this.state;
    const newTask = this.state;
    const { changeData } = this.props;
    delete newTask.saveTask;
    saveTask.push(newTask);
    this.setState({
      task: '',
      date: new Date(),
      saveTask,
    });
    changeData({ saveTask });
  }
  render() {
    const { task, saveTask, date } = this.state;
    console.log(saveTask, date)
    return(
      <div>
        <form action="">
          <input
            value={ task }
            name="task"
            type="text"
            onChange={ this.handleChange }
            placeholder="digite uma nova tarefa"
          />
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar
          </button>
        </form>
        {
          saveTask.length <= 0 ? <p>Nenhuma Tarefa</p>
          :
          saveTask.map((tarefa) => (
            <div>
              <p>{tarefa.task}</p>
            </div>
            ))
          }
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  changeData: (state) => { dispatch(changeTasks(state)); },
});

export default connect(null, mapDispatchToProps)(Home);
