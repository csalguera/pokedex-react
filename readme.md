![app-preview](https://i.imgur.com/YejgQ3G.png)

## Pokedex React App

* This is a decoupled full stack application where users can view various information about their favorite pokemon.
* Users have the ability to toggle between three different color variations. (Shown Below)

#### Blue Variation
![app-blue-variation](https://i.imgur.com/ZN3NAeL.png)
#### Yellow Variation
![app-yellow-variation](https://i.imgur.com/vxL6TIS.png)
#### Red Variation
![app-red-variation](https://i.imgur.com/cqsuanQ.png)

## [Launch App](https://pokdex-react.netlify.app/)

##### [Planning Materials](https://trello.com/b/53fueOZ4/pokedex)

## Technologies Used:

### Front-end:

* React
* React Router
* Material UI
* JavaScript

### Back-end:

* Node
* Express
* MongoDB
* Mongoose
* AWS S3

### Other:

* Git
* GitHub

## Next Steps:

* [ ] Add an interface for users and admins to sign up and log in
* [ ] Add an interface that allows admins to perform CRUD operations to the api
* [ ] Allow users to save their preferred color variation
* [ ] Create pages for the index and details of abilities and moves
* [ ] Create pages for the remaining pokemon beyond #0649

## Running on Your Local Machine

#### Dependencies

* Node v18.12.1 or higher

#### Installation Steps

* Clone this repository to your local machine.

* ```cd``` into your cloned repository and run the command ```npm install```

* Set up your ```.env``` file

#### .env

> REACT_APP_API_BASE_URL='https://pokeapi.co/api/v2'

* This application uses the open source [PokéAPI](https://pokeapi.co/api/v2) for fetching pokemon data such as name, types, and abilities.

> REACT_APP_POKEMON_CRIES_BASE_URL='contact_me_for_url'

* In addition, a private database which contains various CRUD actions on pokemon audio files is needed. To access this API, contact me via [email](mailto:carlos.e.salguera@gmail.com).

#### Launching the Application

* Run the command ```npm start```

* Navigate to http://localhost:3000/

#### Running the Tests

* Run the command ```npm test```

> Due to using create-react-app, the tests directory and the setupTests.js file are located within the src directory.