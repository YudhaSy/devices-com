import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Device} from '../../models/device.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  @Input() devices?: Device[];
  @Output() selectedDeviceID = new EventEmitter<number>();

  showDevice(id: number) {
    this.selectedDeviceID.emit(id);
  }
}
