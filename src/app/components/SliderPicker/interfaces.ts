export interface ISliderPicker {
  testID: string;
  type: string;
  units: string[];
  maxStep: number;
  subtitles?: string[];
  setValue: Function;
  value: number;
}
