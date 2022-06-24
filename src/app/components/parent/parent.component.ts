import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'src/app/notifier.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  expandible: boolean = false;
  constructor(private notifier: NotifierService) {}

  ngOnInit(): void {}

  public onClick() {
    this.expandible = !this.expandible;
    this.notifier.notify(this.expandible);
  }
}
