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

it('renders list of dogs', () => {
    act(() => { render(<DogsList />, container) });
    expect(container.lastChild.childNodes.length).toBe(api.length);
});
it('renders list of dogs dynamically', () => {
    act(() => { render(<DogsList />, container) });
    let dog = {
        id: api.length++,
        name: "Bilbo Waggins",
        img:
            "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg",
        breed: "Mix",
        ageInHumanYears: 21,
        defaultMood: "Happy"
    };
    expect(container.lastChild.childNodes.length).toBe(api.length);
});