"use client";
import {
  DifficultySubtitles,
  DifficultyUnits,
  PrioritySubtitles,
  PriorityUnits,
} from "@/app/utils/constants/dev.constants";
import {
  ChevronDoubleDownIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { PickerInput } from "../PickerInput";
import { SliderPicker } from "../SliderPicker";
import { Tag } from "../Tag";

export const FormInputs = () => {
  const [value, setValue] = useState({
    difficulty: 1,
    priority: 1,
    title: "",
  });
  const [color, setColor] = useState("#000000");
  const [focused, setFocused] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const ClearInput = () => {
    setFocused(false);
    setTodoTitle("");
  };

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        ClearInput();
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
      title: text,
    }));

  return (
    <div
      ref={cardRef}
      className="rounded-md overflow-hidden shadow-lg bg-white max-w-sm px-6 pt-9 border-purple-500 border-4 border-opacity-20 transition-opacity"
    >
      {!focused ? (
        <CursorArrowRaysIcon
          style={{
            left: "21rem",
          }}
          onClick={() => setFocused(true)}
          className="h-6 w-6 cursor-pointer text-gray-700 absolute top-8 left-0-mt-3 animate-bounce transition-opacity"
        />
      ) : (
        <ChevronDoubleDownIcon
          style={{
            left: "21rem",
          }}
          onClick={() => {
            ClearInput();
          }}
          className="h-6 w-6 cursor-pointer text-gray-700 absolute top-8 left-0-mt-3 animate-bounce transition-opacity"
        />
      )}

      <div className="flex items-center border-b border-teal-500">
        <input
          id="todo-title"
          type="text"
          name="title"
          placeholder="Do you have a task in mind?"
          alt="Text input"
          value={value.title}
          onChange={(e) => setTodoTitle(e.target.value)}
          onFocus={() => setFocused(true)}
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 leading-tight focus:outline-none"
          style={{ fontWeight: "bold" }}
        />
      </div>
      <div
        className={`${
          focused
            ? "opacity-100 h-auto transition-opacity duration-500 ease-in"
            : "opacity-0 h-0 transition-opacity duration-500 ease-out"
        }`}
      >
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
          maxStep={DifficultyUnits.length - 1}
        />
        <SliderPicker
          setValue={setPriorityInputValue}
          value={value.priority}
          testID="priority"
          type="Priority"
          units={PriorityUnits}
          maxStep={PriorityUnits.length - 1}
        />
        <PickerInput label="Category color" testID="category-color">
          <input
            id="todo-color-picker"
            type="color"
            name="color"
            alt="Color picker"
            value={color}
            className="w-10 h-10 rounded-md border border-gray-300 ml-3"
            onChange={(e) => setColor(e.target.value)}
          />
        </PickerInput>
        <div className="pt-2 pb-2">
          <Tag text=":D" styles={{ backgroundColor: color, color: "white" }} />
          <Tag text={DifficultySubtitles[value.difficulty]} />
          <Tag text={PrioritySubtitles[value.priority]} />
        </div>
        <div className="flex justify-left py-2">
          <button
            type="submit"
            disabled={!(value.title.trim().length > 0)}
            onClick={() => setFocused(false)}
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-purple-100 text-purple-800 hover:bg-purple-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-purple-900 dark:text-purple-500 dark:hover:text-purple-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Add new todo
          </button>
        </div>
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
