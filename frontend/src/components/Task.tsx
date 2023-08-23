/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */

import { Context } from "../Context";
import Button from "./Button";
import { useContext } from "react";

/* eslint-disable @typescript-eslint/no-unused-vars */
type Props = {
  id: string;
  content: string;
};

const Task = ({ id, content }: Props) => {
  const data = useContext(Context);

  const gethro = () => {
    data.fetch();
  };

  const DeleTask = async () => {
    try {
      const response = await fetch("http://localhost:3003/api/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();
      gethro();

      if (response.ok) {
        console.log("Task deleted successfully : ", data);
      } else {
        console.error("task didnt delete successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="w-full border-b border-slate-200 py-2 flex justify-between items-center"
      key={id}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 flex justify-center items-center h-8 border border-solid border-white rounded-full ">
          {id}
        </div>
        <div>{content}</div>
      </div>
      <div onClick={DeleTask}>
        <Button text="DEL" />
      </div>
    </div>
  );
};

export default Task;
