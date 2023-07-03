import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokedexService } from '../shared/pokedex.service';
import { Pokemon } from '../shared/pokemon.model';

@Component({
  selector: 'app-create-pokemon-page',
  templateUrl: './create-pokemon-page.component.html',
})
export class CreatePokemonPageComponent {
  pokemonForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pokedexService: PokedexService
  ) {
    this.pokemonForm = this.formBuilder.group({
      name: ['', Validators.required],
      imageUrl: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.pokemonForm.invalid) {
      return;
    }

    const { name, imageUrl, description } = this.pokemonForm.value;
    const pokemon = new Pokemon(name, imageUrl, description);
    this.pokedexService.addPokemon(pokemon);
    this.pokemonForm.reset();
  }
}
