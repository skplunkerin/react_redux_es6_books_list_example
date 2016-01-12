import React from 'react';

// ES5:
// const VideoListItem = (props) => {
//   const video = props.video;
// ES6:
// const VideoListItem = ({video}) => {
// to grab multiple, separate with a comma:
const VideoListItem = ({video, onVideoSelect}) => {
  console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;