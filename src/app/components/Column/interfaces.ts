import { ReactNode } from "react";

export interface IColumn {
  children: ReactNode;
  title: string;
  tasksNumber: number;
}
