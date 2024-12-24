import type { Customer } from "./customer";

export enum Status {
  inProgress = "IN PROGRESS",
  Closed = "CLOSED",
}

export interface Deal {
  name: string;
  area: string;
  appointmentDate: string;
  price: string;
  status: Status;
}

