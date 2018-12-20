import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-motion',
  templateUrl: './device-motion.component.html',
  styleUrls: ['./device-motion.component.css']
})
export class DeviceMotionComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const { DeviceMotionEvent } = <Iwindow>window;
    console.log(DeviceMotionEvent);
    if (DeviceMotionEvent === undefined) {
      // window.webkitSpeechRecognition;
      document.querySelector('#acc').textContent = 'NO';
      document.querySelector('#acc').className = 'no';
    } else {
      document.querySelector('#acc').textContent = 'YES';
      document.querySelector('#acc').className = 'yes';
      // window.addEventListener('devicemotion', this.accelerometerUpdate, true);
    }
  }

  accelerometerUpdate(event) {
    let aX = event.accelerationIncludingGravity.x * 10;
    const aY = event.accelerationIncludingGravity.y * 10;
    const aZ = event.accelerationIncludingGravity.z * 10;

    document.querySelector('#x').innerHTML = '' + aX;
    document.querySelector('#y').innerHTML = '' + aY;
    document.querySelector('#z').innerHTML = '' + aZ;

    if (aY < 0) {
      aX = -aX - 180;
    }
    //  document.querySelector('#block').style.transform = 'rotate(' + aX + 'deg)';
    document.getElementById('#block').style.transform = 'rotate(' + aX + 'deg)';
  }
}
interface Iwindow extends Window {
  DeviceMotionEvent: any;
}
