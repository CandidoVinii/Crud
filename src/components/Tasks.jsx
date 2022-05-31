import React from 'react';
import { connect } from 'react-redux';
import { removeTask } from '../redux/action/action';

class Tasks extends React.Component {
  render() {
    const {
      stateTask: { saveTask },
    } = this.props;
    const { remove } = this.props;
    console.log(saveTask);
    return (
      <div>
        {saveTask.length <= 0 ? (
          <p>Nenhuma Tarefa</p>
        ) : (
          saveTask.map((tarefa) => (
            <ul key={tarefa.id}>
              <li>
                {tarefa.task} | {tarefa.date}
              </li>
              <button
                type="button"
                name={tarefa.task}
                onClick={ () => remove(tarefa.id)}
              >
                Finalizar Tarefa
              </button>
            </ul>
          ))
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  stateTask: state.task,
});

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id) => dispatch(removeTask(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
