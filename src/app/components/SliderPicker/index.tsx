"use client"; // Allows hydration by client side

import { Box } from "@mui/material";
import { PickerInput } from "..";
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
      <PickerInput testID={testID} label={type}>
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
      </PickerInput>
    </Box>
  );
};
