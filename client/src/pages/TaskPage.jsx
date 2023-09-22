import { useEffect } from "react";

import { useTasks } from "../context/taskContext";

const TaskPage = () => {

  const {getTasks, tasks} = useTasks()
  console.log(tasks)

  useEffect(() => {
    getTasks()
  }, [] )


  return (
    <div>
      { tasks.map(task => (
        <div key={task._id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      )) }
    </div>
  )
}

export default TaskPage
