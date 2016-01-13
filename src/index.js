import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash'; // this is the custom with using Lodash?
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'INSERT APIKEY HERE';

// create a new component, this compoenent should produce some html
// ES5: const App = function() {
// ES6: const App = () => {
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    // ES5:
    // YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
    // ES6:
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // since videos param is the same name as the key we're setting below
      // we can do this: (ES6 syntax, only works when key and property are the same variable name))
      // this.setState({ videos });
      // instead of the usual:
      // this.setState({ videos: videos });

      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar 
          onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// take this components generated html and place into DOM
// https://babeljs.io for example to see how ES6 converts to vanilla javascript
ReactDOM.render(
  <App />, 
  document.querySelector('.container')
);
