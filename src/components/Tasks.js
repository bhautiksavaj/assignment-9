import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { taskContext } from "../Context";

const Tasks = () => {
  const context = useContext(taskContext);
  return (
    <>
      {context.tasks.map((task, index) => (
        <div
          className={`task ${task.reminder && "reminder"}`}
          onDoubleClick={() => context.toggleReminder(task.id)}
          key={index}
        >
          <h3>
            {task.text}
            <FaTimes
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => context.deleteTask(task.id)}
            />
          </h3>
          <p>{task.day}</p>
        </div>
      ))}
    </>
  );
};

export default Tasks;
