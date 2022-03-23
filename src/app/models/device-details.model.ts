import {Device} from "./device.model";

export class DeviceDetails {
  temperature!: string;
  usage!: Usage;
  relatedDevices!: Device[];
}

export class Usage {
  placeHolder!: string;
}
