import { Component } from '@angular/core';
import {GlobalExampleServiceService} from "../../../servies/global-example-service.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counter$ = this.counterService.counter$
 constructor(private counterService:GlobalExampleServiceService) {
 }

  increment() {
    this.counterService.increment();
  }
}
