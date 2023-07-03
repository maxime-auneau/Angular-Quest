import { Component } from '@angular/core';
import { Pokemon } from '../shared/pokemon.model';
import { PokedexService } from '../shared/pokedex.service';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
})
export class PokedexPageComponent {
  pokemons: Pokemon[];
  selectedPokemon: Pokemon | undefined;

  constructor(private pokedexService: PokedexService) {
    this.pokemons = pokedexService.getPokemons();
  }

  onPokemonClicked(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }
}
