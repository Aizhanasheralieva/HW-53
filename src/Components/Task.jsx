const Task = ({task, deleteTask}) => {
  return (
    <li className="taskList">
      {task.text}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default Task;