export interface ISliderPicker {
  testID: string;
  type: string;
  units: string[];
  maxStep: number;
  setValue: Function;
  value: number;
}
