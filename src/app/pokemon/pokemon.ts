export class Pokemon {
    id!: number;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    types: Array<string>;
    created: Date;

    constructor(){
        this.hp = 100,
        this.cp = 10,
        this.name = "Enter a name...",
        this.picture = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png"
        this.types = ['Normal'],
        this.created = new Date()
    }
}