"use client";
import { ITag } from "./interfaces";
export const Tag = ({ id, text, styles }: ITag) => {
  return (
    <span
      id={id}
      style={{
        ...styles,
      }}
      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
    >
      {text}
    </span>
  );
};
