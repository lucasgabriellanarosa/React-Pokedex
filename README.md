# Pokedex

I decided to do this project after coding my first To Do List with React, so it is my first "non-toDoList" React project. Here I'm using more features that this Javascript library provide to us. Here are the features I'm using in this project:

* UseState
* Props
* UseEffect
* React Router Dom

We can say that I used all that I learned with the React course from DevMedia, the platform I'm using to learn this library. I'm also using the [Swiper](https://swiperjs.com/get-started) library to make the carousel.


## Pages

### Roots

Only one file: Roots.jsx. It's here the react router dom main functionality: Where we write what page should be rendered in a specific URL. In this project we only have two pages, the Home and the PokemonPage.

### Home

The main route. When you load this page we make a request to our API combining Axios with the useEffect Hook. Then, we update the list of our pokemons using the useState Hook and in the end we load the pokemons inside a Swiper by using the filter function. 

In this case, we use filter instead of map because we don't just render the list. We use another state to manage a query that we write inside the INPUT in the header and filter the pokemon list only rendering a pokemon if its name includes the query. For example, if you write "char" you won't see the "pikachu" card, because it doesn't includes the query.


### PokemonPage

Each pokemon has an individual page. Here you see its basic informations (name, default and shiny image, types).

