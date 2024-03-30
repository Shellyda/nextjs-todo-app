import {
  AwaitedReactNode,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";

export interface ICard {
  task: {
    id: string;
    title:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | ReactPortal
      | Promise<AwaitedReactNode>
      | null
      | undefined;
    difficulty: number;
    priority: number;
    color: string | undefined;
    date: string | number | Date;
  };
  key: number;
  onClickCheck?: Function;
  onClickCancel?: Function;
}
