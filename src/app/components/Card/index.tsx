"use client";

import {
  DifficultySubtitles,
  PrioritySubtitles,
} from "@/app/utils/constants/dev.constants";
import {
  ArrowLeftCircleIcon,
  CheckCircleIcon,
  PauseCircleIcon,
} from "@heroicons/react/24/outline";
import {
  TagIcon,
  XCircleIcon as XCircleIconSolid,
} from "@heroicons/react/24/solid";

import Link from "next/link";
import { Tag } from "../Tag";
import { ICard } from "./interfaces";

export const Card = ({ task, key, onClickIcon }: ICard) => {
  return (
    <div
      key={key}
      id={`card-${task.id}`}
      data-testid={`card-${task.id}`}
      className={`bg-white p-3 rounded shadow group/item hover:translate-y-0.5 cursor-pointer ${
        task.status == "archived" && "opacity-80"
      }`}
    >
      <div className="flex items-center justify-between">
        <p
          id={`card-title-${task.id}`}
          className={`font-semibold py-3 px-1 ${
            task.status === "completed" && "text-gray-500 line-through"
          }`}
        >
          {task.title}
        </p>

        <span className="text-sm  group/edit invisible group-hover/item:visible">
          {task.status == "pending" ? (
            <div className="flex">
              <Link
                href="?toast=true&type=completed"
                id={`button-complete-task-${task.id}`}
                data-testid={`button-complete-task-${task.id}`}
              >
                <CheckCircleIcon
                  onClick={() => onClickIcon?.(task, "completed")}
                  className="h-6 w-6 cursor-pointer text-green-500 hover:bg-green-500 hover:text-white hover:rounded-full"
                />
              </Link>

              <PauseCircleIcon
                id={`button-archive-task-${task.id}`}
                data-testid={`button-archive-task-${task.id}`}
                onClick={() => onClickIcon?.(task, "archived")}
                className="h-6 w-6 cursor-pointer text-gray-700 hover:bg-gray-500 hover:text-white hover:rounded-full"
              />
            </div>
          ) : (
            <div className="flex">
              <div
                id={`button-go-back-task-to-pending-${task.id}`}
                data-testid={`button-go-back-task-to-pending-${task.id}`}
              >
                <ArrowLeftCircleIcon
                  onClick={() => onClickIcon?.(task, "pending")}
                  className="h-6 w-6 opacity-50cursor-pointer text-purple-500 hover:bg-purple-500 hover:text-white hover:rounded-full"
                />
              </div>
              <Link
                href="?toast=true&type=canceled"
                id={`button-delete-task-${task.id}`}
              >
                <XCircleIconSolid
                  onClick={() => onClickIcon?.(task, "deleted")}
                  className="h-6 w-6 cursor-pointer text-red-500 hover:bg-red-500 hover:text-white hover:rounded-full"
                />
              </Link>
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
            id={`card-tag-status-${task.id}`}
            data-testid={`card-tag-status-${task.id}`}
            styles={{
              color: "white",
              backgroundColor: task.status == "completed" ? "green" : "red",
            }}
            text={`${task.status == "completed" ? "Done" : "Replan"}`}
          />
        </span>
        <span className="text-sm text-gray-500">
          <Tag
            id={`card-tag-difficulty-${task.id}`}
            data-testid={`card-tag-difficulty-${task.id}`}
            text={DifficultySubtitles[task.difficulty]}
          />
        </span>
        <span className="text-sm text-gray-500">
          <Tag
            id={`card-tag-priority-${task.id}`}
            data-testid={`card-tag-priority-${task.id}`}
            text={PrioritySubtitles[task.priority]}
          />
        </span>
        <span
          className="text-sm"
          id={`card-tag-icon-color-${task.id}`}
          data-testid={`card-tag-icon-color-${task.id}`}
        >
          <TagIcon className="h-6 w-6" color={task.color} />
        </span>
      </div>

      <p
        className="text-sm text-gray-500"
        id={`card-creation-date-${task.id}`}
        data-testid={`card-creation-date-${task.id}`}
      >
        Created at {new Date(task.date).toLocaleDateString()}
      </p>
    </div>
  );
};
