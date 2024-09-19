import "./App.css";
import {useState} from "react";
import AddTaskForm from "./components/AddTaskForm";
import Task from "./components/Task";

const App = () => {
  const [tasks, setTasks] = useState([
    {id: "1", text: "Review the previous lesson"},
    {id: "2", text: "Learn the documentation on spread"},
    {id: "3", text: "Do the homework"},
  ]);

  const [currentTask, setCurrentTask] = useState("");

  const addTask = () => {
    if (currentTask.trim()) {
      const newTask = {
        id: Date.now().toString(),
        text: currentTask,
      };
      setTasks([...tasks, newTask]);
      setCurrentTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>ToDo List</h1>
      <AddTaskForm currentTask={currentTask} setCurrentTask={setCurrentTask} addTask={addTask}/>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} deleteTask={deleteTask}/>
        ))}
      </ul>
    </div>
  );
};

export default App;
