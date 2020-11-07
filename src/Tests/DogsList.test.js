import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";
import api from '../dogs';
import DogsList from '../Containers/DogsList';

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders to the DOM', () => {
    console.log(document.body.querySelector('div.dogContainer'))
    expect(document.body.querySelector('div.dogContainer')).toBeTruthy();
});

it('renders list of dogs', () => {
    act(() => { render(<DogsList />, container) });
    expect(container.lastChild.childNodes.length).toBe(api.length);
});
it('renders list of dogs dynamically', () => {
    act(() => { render(<DogsList />, container) });
    console.log(api.length)
    let dogs = [...api];
    let dog = {
        id: ++api.length,
        name: "Bilbo Waggins",
        img:
            "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg",
        breed: "Mix"
    };
    dogs.push(dog);
    expect(container.lastChild.childNodes.length).toBe(dogs.length);
});