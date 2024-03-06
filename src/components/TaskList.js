import React from "react";
import Task from "./Task"

function TaskList({ tasks, deleteTask, curCat = 'All' }) {
  const newTasks = tasks.filter(task => task.category === curCat || curCat === 'All')
  .map(function(task, index){
      return <Task
        className="task"
        key={index}
        text={task.text}
        category={task.category}
        deleteTask={deleteTask}
      />
  })

  return (
    <div className="tasks">
      {newTasks}
    </div>
  );
}

export default TaskList;