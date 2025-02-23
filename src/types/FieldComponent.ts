import { Control, FieldPath } from "react-hook-form";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ControlledFieldProps<T extends Control<any>> = {
  control: T;
  name: FieldPath<T extends Control<infer U> ? U : never>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FieldComponent<P = unknown> = <T extends Control<any>>(
  props: ControlledFieldProps<T> & P
) => JSX.Element;
