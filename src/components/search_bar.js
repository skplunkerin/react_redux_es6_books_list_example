// `{ Component }` will allow us to not need to use `extends React.Component` on `class SearchBar`
import React, { Component } from 'react';
// import React from 'react';

// functial component, just a simple function:
// const SearchBar = () => {

// class-based component
// define new class and inherit all cool stuff from React.Component
// class SearchBar extends React.Component {
class SearchBar extends Component {
  constructor(props) {
    super(props);

    // inside the constructor like this is the only time we can 
    // set state like this
    this.state = { term: '' };
    // everywhere else we need to do:
    // this.setState({ term: 'whatever we set it too' });
  }

  render() {
    // ES6 stuff
    // return <input onChange={(event) => console.log(event.target.value)} />;
    // or even:
    // return <input onChange={event => console.log(event.target.value)} />;
    return (
      <div>
        <input 
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
    // return <input onChange={this.onInputChange} />;
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
};

// this is the same for functional and class-based components
export default SearchBar;
