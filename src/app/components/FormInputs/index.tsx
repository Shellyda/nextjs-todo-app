"use client";

import {
  DifficultySubtitles,
  DifficultyUnits,
  PrioritySubtitles,
  PriorityUnits,
} from "@/app/constants/dev.constants";
import React from "react";
import { PickerInput } from "../PickerInput";
import { SliderPicker } from "../SliderPicker";
import { Tag } from "../Tag";

export const FormInputs = () => {
  const [value, setValue] = React.useState({
    difficulty: 1,
    priority: 1,
    todoHasTitle: false,
  });
  const [color, setColor] = React.useState("#000000");

  const setDifficultyInputValue = (newState: number) =>
    setValue((prevState) => ({
      ...prevState,
      difficulty: newState,
    }));

  const setPriorityInputValue = (newState: number) =>
    setValue((prevState) => ({
      ...prevState,
      priority: newState,
    }));

  const setTodoTitle = (text: string) =>
    setValue((prevState) => ({
      ...prevState,
      todoHasTitle: text.trim().length > 0,
    }));

  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-6">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            id="todo-title"
            type="text"
            name="title"
            placeholder="Do you have a task in mind?"
            alt="Text input"
            onChange={(e) => setTodoTitle(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          />
        </div>
        <input
          id="todo-difficulty-input"
          type="text"
          name="difficulty"
          alt="Difficulty input"
          value={value.difficulty}
          style={{
            visibility: "hidden",
          }}
        />

        <SliderPicker
          setValue={setDifficultyInputValue}
          value={value.difficulty}
          testID="difficulty"
          type="Difficulty"
          units={DifficultyUnits}
          maxStep={4}
        />
        <SliderPicker
          setValue={setPriorityInputValue}
          value={value.priority}
          testID="priority"
          type="Priority"
          units={PriorityUnits}
          maxStep={3}
        />
        <PickerInput label="Category color" testID="category-color">
          <input
            id="todo-color-picker"
            type="color"
            name="color"
            alt="Color picker"
            value={color}
            className="w-10 h-10 rounded-md border border-gray-300"
            onChange={(e) => setColor(e.target.value)}
          />
        </PickerInput>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Tag text=":D" styles={{ backgroundColor: color, color: "white" }} />
        <Tag text={DifficultySubtitles[value.difficulty]} />
        <Tag text={PrioritySubtitles[value.priority]} />
      </div>
      <div className="flex justify-left px-6 py-2">
        <button
          type="submit"
          disabled={!value.todoHasTitle}
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-purple-100 text-purple-800 hover:bg-purple-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-purple-900 dark:text-purple-500 dark:hover:text-purple-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Add new todo
        </button>
      </div>
      <input
        id="todo-priority-input"
        type="number"
        name="priority"
        alt="Number input"
        value={value.priority}
        style={{
          visibility: "hidden",
        }}
      />
    </div>
  );
};
