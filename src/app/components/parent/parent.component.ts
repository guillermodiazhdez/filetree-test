import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'src/app/notifier.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  open: boolean = false;
  constructor(private notifier: NotifierService) {}

  ngOnInit(): void {}

  public onClick() {
    this.open = !this.open;
    this.notifier.notify(this.open);
  }
}
