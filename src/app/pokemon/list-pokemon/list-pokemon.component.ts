import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[] | undefined;

  constructor(private router: Router, private pokemonService: PokemonService) {}

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon.id])
  }

  ngOnInit(){
    this.pokemonService.getPokemonList()
      .subscribe((pokemonList) => this.pokemonList = pokemonList)
  }
}
