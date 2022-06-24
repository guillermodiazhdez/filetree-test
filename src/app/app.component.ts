import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotifierService } from './notifier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public expandible: boolean = false;

  private subscription: Subscription | undefined;
  constructor(private notifier: NotifierService) {}

  ngOnInit() {
    this.subscription = this.notifier
      .getNotifierListener()
      .subscribe((expandible) => {
        this.expandible = expandible;
      });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
