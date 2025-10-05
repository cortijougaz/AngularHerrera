import {Component, signal} from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'dragonball-page',
  templateUrl: './dragonball-page.component.html',
  styleUrls: ['./dragonball-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballPageComponent{
  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 1, name: 'Vegeta', power: 8000},
    {id: 1, name: 'Piccolo', power: 3000},
  ]);
}
