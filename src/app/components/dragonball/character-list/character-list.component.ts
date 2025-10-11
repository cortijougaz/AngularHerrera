import { Component } from '@angular/core';
import {input} from '@angular/core';
import type {Character} from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'

})
export class CharacterListComponent {
  listName = input.required<string>();
  characters = input.required<Character[]>();
}
