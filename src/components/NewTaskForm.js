import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [newTaskName, setNewTaskName] = useState('')
  const [newTaskCategory, setNewTaskCategory] = useState('Code')

  function onNewTaskNameChange(event){
    setNewTaskName(event.target.value)
  }

  function onNewTaskCategoryChange(event){
    setNewTaskCategory(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    onTaskFormSubmit({text:newTaskName, category:newTaskCategory})
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={onNewTaskNameChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={onNewTaskCategoryChange}>
          {categories.map((category) => category==='All' ? null : <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
