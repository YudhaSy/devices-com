import {DeviceDetails} from "./device-details.model";

export class Device {
  id!: number;
  name!: string;
  status!: string;
  icon?: string;
  info?: string;
  details?: DeviceDetails;
}
