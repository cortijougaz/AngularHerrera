import {Component, inject, ChangeDetectionStrategy} from '@angular/core';
import {CharacterListComponent} from '../../components/dragonball/character-list/character-list.component';
import {CharacterAddComponent} from '../../components/dragonball/character-app/character-add.component';
import {DragonballService} from '../../services/dragonball.service';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'dragonball-super-page',
  templateUrl: './dragonball-super-page.component.html',
  styleUrls: ['./dragonball-super-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CharacterListComponent,
    CharacterAddComponent
  ]
})
export class DragonballSuperPageComponent {
  public dragonballService = inject(DragonballService);
}
