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
export class DragonballPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    }
    this.characters.update((list: Character[]): Character[] => [...list, newCharacter]);
    this.resetFields();
  };

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
