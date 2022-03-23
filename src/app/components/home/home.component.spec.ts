import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {DevicesService} from '../../services/devices.service';
import {of} from 'rxjs';
import {Device} from '../../models/device.model';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let deviceService: DevicesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        DevicesService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    deviceService = TestBed.inject(DevicesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all available devices and set to the view attribute', () => {
    const devices: Device[] = [  {
      id: 1,
      name: "Device 1",
      status: "Available",
      icon: "fa-solid fa-mobile-screen fa-2xl",
      info: "Hello I am Device 1"
    }];
    spyOn(deviceService, 'getDevices').and.returnValue(of(devices));

    component.getDeviceList();

    expect(component.devicesForView.length).toBe(1);
    expect(component.devicesForView[0].id).toBe(devices[0].id);
    expect(component.devicesForView[0].name).toBe(devices[0].name);
    expect(component.devicesForView[0].status).toBe(devices[0].status);
    expect(component.devicesForView[0].icon).toBe(devices[0].icon);
    expect(component.devicesForView[0].info).toBe(devices[0].info);
    expect(component.devices.length).toBe(1);
  });
});
