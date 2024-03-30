"use client";

import {
  DifficultySubtitles,
  PrioritySubtitles,
} from "@/app/utils/constants/dev.constants";
import {
  CheckCircleIcon,
  FaceSmileIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { Tag } from "../Tag";
import { ICard } from "./interfaces";

export const Card = ({ task, key, onClickCancel, onClickCheck }: ICard) => {
  return (
    <div
      key={key}
      className="bg-white p-3 rounded shadow group/item hover:translate-y-0.5 cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <p className="font-semibold py-3">{task.title}</p>
        <span className="text-sm flex group/edit invisible group-hover/item:visible">
          <CheckCircleIcon
            onClick={() => onClickCheck?.(task, "completed")}
            className="h-6 w-6 cursor-pointer text-green-500 hover:bg-green-500 hover:text-white hover:rounded-full"
          />
          <XCircleIcon
            onClick={() => onClickCancel?.(task, "canceled")}
            className="h-6 w-6 cursor-pointer text-red-500 hover:bg-red-500 hover:text-white hover:rounded-full"
          />
        </span>
      </div>
      <div className="flex">
        <span className="text-sm text-gray-500">
          <Tag text={DifficultySubtitles[task.difficulty]} />
        </span>
        <span className="text-sm text-gray-500">
          <Tag text={PrioritySubtitles[task.priority]} />
        </span>
        <span className="text-sm">
          <FaceSmileIcon className="h-6 w-6" color={task.color} />
        </span>
      </div>

      <p className="text-sm text-gray-500">
        Created at {new Date(task.date).toLocaleDateString()}
      </p>
    </div>
  );
};
