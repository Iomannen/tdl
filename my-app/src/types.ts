export interface TaskInterface {
  id: number;
  value: string;
  checked: boolean;
}

export type Switch = "All" | "Unchecked" | "Checked";
