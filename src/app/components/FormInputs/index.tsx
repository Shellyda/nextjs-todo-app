"use client";

import {
  DifficultySubtitles,
  DifficultyUnits,
  PriorityUnits,
} from "@/constants/dev.constants";
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

  return (
    <>
      <input
        id="todo-title"
        type="text"
        name="title"
        placeholder="Do you have a task in mind?"
        alt="Text input"
      />
      <input
        id="todo-color-picker"
        type="color"
        name="color"
        alt="Color picker"
      />
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
        subtitles={DifficultySubtitles}
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
    </>
  );
};
