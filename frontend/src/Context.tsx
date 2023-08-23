/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react";
type Task = {
  id: string;
  content: string;
};
type Props = {
  tasks: Task[];
  method: (value: Task[]) => void;
  fetch: () => void;
};

export const Context = createContext<Props>({
  tasks: [],
  method: function (_value: Task[]): void {
    throw new Error("Function not implemented.");
  },
  fetch: function (): void {},
});
