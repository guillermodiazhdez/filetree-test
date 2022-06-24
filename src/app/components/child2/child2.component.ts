import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
})
export class Child2Component {
  @HostBinding('class.expandible')
  @Input()
  expandible: boolean = false;
}
