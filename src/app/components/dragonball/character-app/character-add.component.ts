import {Component} from '@angular/core';
import {signal} from '@angular/core';
import {Character} from '../../../interfaces/character.interface';
import {output} from '@angular/core';

@Component({
  selector: 'drabonball-character-add',
  templateUrl: './character-add.component.html',
  styleUrl: './character-add.component.css'
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);
  newCharacter = output<Character>()

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      //id: this.characters().length + 1,
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    }

    //this.characters.update((list: Character[]): Character[] => [...list, newCharacter]);
    this.newCharacter.emit(newCharacter);
    console.log({newCharacter});
    this.resetFields();
  };

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
