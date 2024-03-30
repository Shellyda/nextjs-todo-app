import { ITask } from "@/app/utils/interfaces";

export interface ICard {
  task: ITask;
  key: string;
  onClickCheck?: Function;
  onClickCancel?: Function;
}
