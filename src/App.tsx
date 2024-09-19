import "./App.css";
import {useState} from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {id: "1", text: "Review the previous lesson"},
    {id: "2", text: "Read the documentation"},
    {id: "3", text: "Do homework"},
  ]);
};

const [currentTask, setCurrentTask] = useState('');


export default App;
