import { heroes } from "../data/heroes";





export const getHeroesByName = (name = '') => {
  
    name = name.toLocaleLowerCase().trim();

    if (name.length === 0) return [];
    //Si el nombre introducido tiene una longitud de 0, es decir, si no se introduce nada, se devuelve un arreglo vacio

    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes(name)
    );
    //Si el nombre introducido coincide con alguno de la lista de heroes, se regresa ese nombre. Sino, se devuelve un arreglo vacio

}
