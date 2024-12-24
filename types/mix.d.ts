import type { Customer } from "./customer";
import type { Deal } from "./deal";

export type Mix = Partial<Customer & Deal>;
