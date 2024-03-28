"use client";

import {
  DifficultySubtitles,
  DifficultyUnits,
  PrioritySubtitles,
  PriorityUnits,
} from "@/constants/dev.constants";
import { Typography } from "@mui/material";
import React from "react";
import { SliderPicker } from "../SliderPicker";

export const FormInputs = () => {
  const [value, setValue] = React.useState({ difficulty: 1, priority: 1 });

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
  //todo - generic components for all inputs
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            id="todo-title"
            type="text"
            name="title"
            placeholder="Do you have a task in mind?"
            alt="Text input"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          />
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
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 "
              htmlFor="inline-full-name"
            >
              <Typography gutterBottom>Category color</Typography>
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              id="todo-color-picker"
              type="color"
              name="color"
              alt="Color picker"
              className="w-10 h-10 rounded-md border border-gray-300"
            />
          </div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{DifficultySubtitles[value.difficulty]}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{PrioritySubtitles[value.priority]}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          :D
        </span>
      </div>
      <button
        type="submit"
        className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded-full"
      >
        Add new todo
      </button>
    </div>
  );
};
