import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //place to load the below template
  templateUrl: './app.component.html', //external template
  /* template:`<p>Inline template
    </p>`, */
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular';
  username = '';
  dataReceived: any;
  greetUser(uName: string) {
    this.username = uName;
  }
  dataFromChild(ev: any) {
    this.dataReceived = ev;
  }
}
