import React from 'react';
import ReactDOM from 'react-dom';
import Prime from './Prime';

it('test isPrime function', () => {
    let prime = new Prime();
    expect(prime.isPrime(2)).toEqual(true);
    expect(prime.isPrime(10)).toEqual(false);
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Prime />, div);
    ReactDOM.unmountComponentAtNode(div);
});