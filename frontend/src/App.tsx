/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect } from "react";
import Button from "./components/Button";
import Task from "./components/Task";
import axios from "axios";
import { Context } from "./Context";

type Props = {
  id: string;
  content: string;
};

function App() {
  const [tasks, setTasks] = useState<Props[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3003/api/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const AddTask = async () => {
    try {
      const response = await axios.post("http://localhost:3003/api/add", {
        newTask,
      });
      const data = await response.data;
      if (response.status) {
        console.log("done : ", data);
      } else {
        console.log("undone");
      }

      fetchData();
      setNewTask("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Context.Provider value={{ method: setTasks, tasks: tasks , fetch:fetchData }}>
        <div className="text-white w-full flex bg-slate-800 justify-center items-center h-screen">
          <div className="w-96 rounded-lg bg-slate-700 p-4">
            <h1 className="block text-center font-semibold mb-6 text-3xl">
              TO DO LIST
            </h1>
            <div className="w-full flex justify-between items-center">
              <input
                onChange={(e) => {
                  setNewTask(e.target.value);
                }}
                value={newTask}
                type="text"
                placeholder="Enter the new task"
                className="px-3 rounded-md py-2 w-60 bg-slate-900 text-slate-400"
              />
              <div onClick={AddTask}>
                <Button text="ADD" />
              </div>
            </div>

            <div className="block mt-10">
              {tasks.map((task) => (
                <Task id={task.id} content={task.content} />
              ))}
            </div>
          </div>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
