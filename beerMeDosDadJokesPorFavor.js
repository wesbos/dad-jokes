import { dadJokes } from './dadJokes';

const beerMeDosDadJokesPorFavor = dadJokes=> {
    let poolSize = dadJokes.length;
    let indexOfABadDadJokeUno = Math.floor(Math.random() * Math.floor(poolSize));
    let indexOfABadDadJokeDos = Math.floor(Math.random() * Math.floor(poolSize));
    let dosBadDadJokes = [ dadJokes[indexOfABadDadJokeUno], dadJokes[indexOfABadDadJokeDos] ];
    console.log("Beer me!");
    return {
        dosBadDadJokes
    }
}