import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCWHPn7dM91QVekVh96cFwqVDzEDWOjdUo';

// create a new component, this compoenent should produce some html
// ES5: const App = function() {
// ES6:
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// take this components generated html and place into DOM
// https://babeljs.io for example to see how ES6 converts to vanilla javascript
ReactDOM.render(
  <App />, 
  document.querySelector('.container')
);
