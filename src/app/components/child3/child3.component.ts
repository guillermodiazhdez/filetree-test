import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss'],
})
export class Child3Component {
  @HostBinding('class.open')
  @Input()
  open: boolean = false;
}
