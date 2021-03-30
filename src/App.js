import {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskCard from './components/TaskCard';


function App() {

  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = e => {
    e.preventDefault();
    let t = {
      title: input,
      isCompleted: false
    }

    setTasks([...tasks,t]);
    setInput("");

  }

  const handleToggleCheck = (e, idx ) => {
    let t = tasks[idx];
    t.isCompleted = !t.isCompleted;
    setTasks([...tasks.slice(0,idx), t, ...tasks.slice(idx+1)]);
  }

  const handleDeleteTask = (e, idx) => {
    setTasks([...tasks.slice(0,idx), ...tasks.slice(idx+1)])
  }

  return (
    <div className="App">
      <form onSubmit={handleAddTask} className="mx-auto col-4 bg-dark text-warning p-5 mt-5">
          <h2>Add a Task!</h2>
        <div className="form-group">
          <input type="text" className="form-control" onChange={(e) => setInput(e.target.value)} value={input}/>
        </div>
        <input type="submit" value="Add Task" className="btn btn-warning"/>
      </form>
      <div className="d-flex flex-col col-8 mx-auto">
        {
          tasks.map((t,i) => {
            return <TaskCard idx={i} handleToggleCheck={handleToggleCheck} tasks={t} key={i} handleDeleteTask={handleDeleteTask}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
