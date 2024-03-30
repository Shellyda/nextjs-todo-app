"use client";

import { Typography } from "@mui/material";
import { IPickerInput } from "./interfaces";

export const PickerInput = ({ testID, label, children }: IPickerInput) => {
  return (
    <div id={testID} className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label
          className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0"
          htmlFor="inline-full-name"
        >
          <Typography gutterBottom>{label}</Typography>
        </label>
      </div>
      <div className="md:w-2/3">{children}</div>
    </div>
  );
};
