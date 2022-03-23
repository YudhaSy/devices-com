import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Device} from '../models/device.model';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(private httpClient: HttpClient) { }

  getDevices(): Observable<Device[]> {
    return this.httpClient.get<Device[]>('../assets/json/devices.json');
  }

  getDeviceDetails(id: number): Observable<Device> {
    return this.httpClient.get<Device>(`../assets/json/device${id}.json`);
  }
}
