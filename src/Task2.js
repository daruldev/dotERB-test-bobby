import { useEffect, useState } from "react";

function Soal2() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Task 1',
      status: 0,
    },
    {
      id: 2,
      title: 'Task 2',
      status: 0,
    },
    {
      id: 3,
      title: 'Task 3',
      status: 1,
    },
    {
      id: 4,
      title: 'Task 4',
      status: 0,
    },
  ]);

  const setTask = (id, status) => {
    let tasksEdit = [...tasks]
    
    for (let i = 0; i < tasksEdit.length; i++) {
      if (tasksEdit[i].id === id) {
        tasksEdit[i].status = status;
      }
    }

    setTasks(tasksEdit)
  }

  return(
    <div>
      <h1>Daftar Tugas</h1>
      <div>
        <h3>Sedang Berlangsung</h3>
        {tasks.filter((task) => task.status === 0).map((item) => {
          return (<li>{item.title} <button onClick={() => setTask(item.id, 1)}>Selesai</button></li>)
        })}
        <h3>Selesai</h3>
        {tasks.filter((task) => task.status === 1).map((item) => {
          return (<li>{item.title} <button onClick={() => setTask(item.id, 0)}>Undo</button></li>)
        })}
      </div>
    </div>
  )
}

export default Soal2;