'use strict';

var React = require('react');

function UploadOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M11.6777 20.271C7.27476 21.3181 4 25.2766 4 30C4 35.5228 8.47715 40 14 40C14.9474 40 15.864 39.8683 16.7325 39.6221"/><path d="M36.0547 20.271C40.4577 21.3181 43.7324 25.2766 43.7324 30C43.7324 35.5228 39.2553 40 33.7324 40C32.785 40 31.8684 39.8683 30.9999 39.6221"/><path d="M36 20C36 13.3726 30.6274 8 24 8C17.3726 8 12 13.3726 12 20"/><path d="M17.0654 27.8812L23.9999 20.9238L31.1318 28.0002"/><path d="M24 38.0001V24.4619"/>' : '<path d="M11.6777 20.271C7.27476 21.3181 4 25.2766 4 30C4 35.5228 8.47715 40 14 40C14.9474 40 15.864 39.8683 16.7325 39.6221"/><path d="M36.0547 20.271C40.4577 21.3181 43.7324 25.2766 43.7324 30C43.7324 35.5228 39.2553 40 33.7324 40C32.785 40 31.8684 39.8683 30.9999 39.6221"/><path d="M36 20C36 13.3726 30.6274 8 24 8C17.3726 8 12 13.3726 12 20"/><path d="M17.0654 27.8812L23.9999 20.9238L31.1318 28.0002"/><path d="M24 38.0001V24.4619"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 48 48',
    fill: fill ? color : 'none',
    stroke: fill ? 'none' : color,
    strokeWidth: fill ? 0 : strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: className,
    style: style,
    dangerouslySetInnerHTML: { __html: svgContent }
  });
}

module.exports = UploadOne;
