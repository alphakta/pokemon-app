import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})
export class SearchPokemonComponent implements OnInit {

  constructor(private router: Router, private pokemonService : PokemonService) { }

  searchTerms = new Subject<string>()
  pokemons$!: Observable<Pokemon[]>;

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300), // Attendre 300 ms  avant de faire une aute requete
      distinctUntilChanged(),
      switchMap((term) => this.pokemonService.searchPokemon(term))
    )

  }

  search(term: string) {
    this.searchTerms.next(term)
  }

  goToDelail(pokemon: Pokemon){
    const link = ['pokemon/', pokemon.id]
    this.router.navigate(link)
  }

}
