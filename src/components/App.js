import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [curCat, setCurCat] = useState('All')

  function handleDelete(key){
    setTasks(tasks.filter((task) => task.text !== key))
  }

  function onSelectCategory(category){
    setCurCat(category)
  }

  function onTaskFormSubmit(newTask){
    setTasks([...tasks, newTask])
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectCategory={onSelectCategory} curCat={curCat}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} deleteTask={handleDelete} curCat = {curCat}/>
    </div>
  );
}

export default App;
