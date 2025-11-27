'use strict';

var React = require('react');

function FileCollectionOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"/><path d="M30.85 30C28.7237 30 27 32.0086 27 34.4864C27 38.9727 31.55 43.0513 34 44C36.45 43.0513 41 38.9727 41 34.4864C41 32.0086 39.2763 30 37.15 30C35.8479 30 34.6967 30.7533 34 31.9062C33.3033 30.7533 32.1521 30 30.85 30Z"/><path d="M30 4V14H40"/>' : '<path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"/><path d="M30.85 30C28.7237 30 27 32.0086 27 34.4864C27 38.9727 31.55 43.0513 34 44C36.45 43.0513 41 38.9727 41 34.4864C41 32.0086 39.2763 30 37.15 30C35.8479 30 34.6967 30.7533 34 31.9062C33.3033 30.7533 32.1521 30 30.85 30Z"/><path d="M30 4V14H40"/>';

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

module.exports = FileCollectionOne;
