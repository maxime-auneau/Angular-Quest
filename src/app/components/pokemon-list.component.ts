import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../shared/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent {
  @Input() pokemons: Pokemon[] | undefined;
  @Output() pokemonClicked: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();

  onPokemonClick(pokemon: Pokemon): void {
    this.pokemonClicked.emit(pokemon);
  }
}
