import React from "react";
import Task from "./Task"


function TaskList({ tasks, deleteTask, curCat = 'All' }) {
  return (
    <div className="tasks">
      {tasks.map((task) =>
        (task.category === curCat || curCat === 'All') ? (
          <Task
            className="task"
            key={task.text}
            text={task.text}
            category={task.category}
            deleteTask={deleteTask}
          />
        ) : null
      )}
    </div>
  );
}

export default TaskList;