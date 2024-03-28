"use client"; // Allows hydration by client side

import { Box, Typography } from "@mui/material";
import { ISliderPicker } from "./interfaces";
import { SliderStyled } from "./style";

export const SliderPicker = ({
  testID,
  type,
  units,
  maxStep,
  setValue,
  value,
}: ISliderPicker) => {
  const handleChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

  const valueLabelFormat = (value: number) => {
    let scaledValue = value;

    return `${units[scaledValue]}`;
  };

  return (
    <Box id={`slider-container-${testID}`} sx={{ width: 250 }}>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            <Typography gutterBottom>{type}</Typography>
          </label>
        </div>
        <div className="md:w-2/3">
          <SliderStyled
            value={value}
            min={0}
            step={1}
            max={maxStep}
            scale={() => value}
            getAriaValueText={valueLabelFormat}
            valueLabelFormat={valueLabelFormat}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="slider"
          />
        </div>
      </div>
    </Box>
  );
};
