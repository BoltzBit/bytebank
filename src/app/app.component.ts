import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  
  public transferencia: any;

  public transfer($event): void{
    console.log($event);
    this.transferencia = $event;
  }
}
