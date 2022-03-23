import {Component, Input} from '@angular/core';
import {Device} from '../../models/device.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent {
  @Input() set device(val: Device) {
    this.localDevice = Object.assign({}, val);
  };

  localDevice: Device = new Device();
}
