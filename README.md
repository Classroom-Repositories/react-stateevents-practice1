# react-stateevents-practice1

# Deliverables

- You are given an `apiResponse` file to use as a fake API Response. The file is exporting an array of multiple objects that look like this:
   `{ "id": 1, "name": "Happy", "img": "https://www.sciencenews.org/sites/default/files/2018/08/main/articles/082918_lh_crispr-beagles_feat_REV.jpg", "breed": "Beagle" }`

- You have a regular component called DogCard, a container component called DogsList, an App component
- On the DOM your application should show a list of dog images and a button for each image with an innerText that says "Bark"
- When a User clicks on the "Bark" button it should render an `<h2>` to the screen with an innerText that says "Bark"
- When a User clicks on the button a second time the "Ruff" should be removed from the DOM

Below you will find a gif of the completed app

# What are we practicing?

- Making decisions about when we need state and which component should hold state
- mapping through an array to render a list of components
- setState
- Event Handling in React

![dog gif](state-pairing-gif.gif)
