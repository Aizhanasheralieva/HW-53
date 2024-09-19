const AddTaskForm = ({currentTask, setCurrentTask, addTask}) => {
  return (
    <div className="add-task-form">
      <input type="text" value={currentTask} onChange={(event) => setCurrentTask(event.target.value)}
             placeholder="Add new task"/>
      <button onClick={addTask}>Add</button>
    </div>
  );
};

export default AddTaskForm;
