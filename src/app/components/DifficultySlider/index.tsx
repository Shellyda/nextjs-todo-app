"use client";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import * as React from "react";

function valueLabelFormat(value: number) {
  const units = ["Normal", "Smooth", "Medium", "Hard", "Super hard"];

  let scaledValue = value;

  return `${scaledValue} ${units[scaledValue]}`;
}

function calculateValue(value: number) {
  return value;
}

export function DifficultySlider() {
  const [value, setValue] = React.useState<number>(2);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="non-linear-slider" gutterBottom>
        Storage: {valueLabelFormat(value)}
      </Typography>
      <Slider
        value={value}
        min={0}
        step={1}
        max={4}
        scale={calculateValue}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
  );
}
