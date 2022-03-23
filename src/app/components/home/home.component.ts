import {Component} from '@angular/core';
import {Device} from '../../models/device.model';
import {DevicesService} from '../../services/devices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  devices: Device[] = [];
  devicesForView: Device[] = [];
  searchTerm: string = '';
  deviceDetails!: Device;

  constructor(private devicesService: DevicesService) {
    this.devicesService.getDevices().subscribe((devices: Device[]) => {
      this.devices = [...devices];
      this.devicesForView = [...devices];
    });
  }

  applyFilter(val: string) {
    // this filtered data only for the home page (list view)
    // we can selectively filtered the device list or related device list depending if deviceDetails exists
    this.devicesForView = [...this.devices.filter(device => device.name.toLowerCase().includes(val.toLowerCase()))];
  }

  showDevice(id: number) {
    this.devicesService.getDeviceDetails(id).subscribe(data => {
      this.deviceDetails = Object.assign({}, data);
    });
  }
}
