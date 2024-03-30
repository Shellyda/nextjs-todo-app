"use client";

import {
  DifficultySubtitles,
  PrioritySubtitles,
} from "@/app/utils/constants/dev.constants";
import {
  ArrowLeftCircleIcon,
  CheckCircleIcon,
  FaceSmileIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { XCircleIcon as XCircleIconSolid } from "@heroicons/react/24/solid";

import { Tag } from "../Tag";
import { ICard } from "./interfaces";

export const Card = ({ task, key, onClickIcon }: ICard) => {
  return (
    <div
      key={key}
      className={`bg-white p-3 rounded shadow group/item hover:translate-y-0.5 cursor-pointer ${
        task.status == "archived" && "opacity-80"
      }`}
    >
      <div className="flex items-center justify-between">
        <p
          className={`font-semibold py-3 px-1 ${
            task.status === "completed" && "text-gray-500 line-through"
          }`}
        >
          {task.title}
        </p>

        <span className="text-sm  group/edit invisible group-hover/item:visible">
          {task.status == "pending" ? (
            <div className="flex">
              <CheckCircleIcon
                onClick={() => onClickIcon?.(task, "completed")}
                className="h-6 w-6 cursor-pointer text-green-500 hover:bg-green-500 hover:text-white hover:rounded-full"
              />

              <XCircleIcon
                onClick={() => onClickIcon?.(task, "archived")}
                className="h-6 w-6 cursor-pointer text-red-500 hover:bg-red-500 hover:text-white hover:rounded-full"
              />
            </div>
          ) : (
            <div className="flex">
              <ArrowLeftCircleIcon
                onClick={() => onClickIcon?.(task, "pending")}
                className="h-6 w-6 opacity-50cursor-pointer text-purple-500 hover:bg-purple-500 hover:text-white hover:rounded-full"
              />
              <XCircleIconSolid
                onClick={() => onClickIcon?.(task, "deleted")}
                className="h-6 w-6 cursor-pointer text-red-500 hover:bg-red-500 hover:text-white hover:rounded-full"
              />
            </div>
          )}
        </span>
      </div>
      <div className="flex">
        <span
          className="text-sm"
          style={{ display: task.status != "pending" ? "block" : "none" }}
        >
          <Tag
            styles={{
              color: "white",
              backgroundColor: task.status == "completed" ? "green" : "red",
            }}
            text={`${task.status == "completed" ? "Done" : "Replan"}`}
          />
        </span>
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
