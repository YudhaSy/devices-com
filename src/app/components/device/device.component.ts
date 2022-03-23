import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Device} from '../../models/device.model';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html'
})
export class DeviceComponent {
  @Input() set device(val: Device) {
    this.localDevice = Object.assign({}, val);
  };
  @Output() selectRelatedDevice = new EventEmitter<number>();

  localDevice: Device = new Device();

  selectDevice(id: number) {
    this.selectRelatedDevice.emit(id);
  }
}
