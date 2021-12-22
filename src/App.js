import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { taskContext } from "./Context";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true
    }
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  const toggleShowAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <taskContext.Provider
      value={{
        tasks: tasks,
        showAddTask: showAddTask,
        deleteTask: deleteTask,
        toggleReminder: toggleReminder,
        addTask: addTask,
        toggleShowAddTask: toggleShowAddTask
      }}
    >
      <div className="container">
        <Header />
        {showAddTask && <AddTask />}
        {tasks.length > 0 ? <Tasks /> : "No Tasks To Show"}
      </div>
    </taskContext.Provider>
  );
};

export default App;
