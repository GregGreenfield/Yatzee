import { Component } from '@angular/core';
import { Die } from './die/die.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public dice: Die[] = [{currentSelected: 0}, {currentSelected: 0}, {currentSelected: 0}, {currentSelected: 0}, {currentSelected: 0}];
  title = 'Yatzee';
  
}
