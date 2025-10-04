import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Ricardo ';
  public lastName: string = 'Cortijo Ugaz';
  public age: number = 32;
}
