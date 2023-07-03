import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonDetailComponent } from './components/pokemon-detail.component';
import { PokemonListComponent } from './components/pokemon-list.component';
import { CreatePokemonPageComponent } from './pages/create-pokemon-page.component';
import { PokedexPageComponent } from './pages/pokedex-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    CreatePokemonPageComponent,
    PokedexPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
