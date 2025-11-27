'use strict';

var React = require('react');

function MovingPicture(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="6" y="22" width="20" height="20" rx="3"/><path d="M30 6L42 6L42 18"/><circle cx="34" cy="42" r="1.5"/><circle r="1.5" transform="matrix(1 0 0 -1 6 14)"/><circle cx="42" cy="42" r="1.5"/><circle r="1.5" transform="matrix(1 0 0 -1 6 6)"/><circle cx="42" cy="34" r="1.5"/><circle r="1.5" transform="matrix(1 0 0 -1 14 6)"/><circle cx="42" cy="26" r="1.5"/><circle r="1.5" transform="matrix(1 0 0 -1 22 6)"/><path d="M6 34L12.1195 29.4103C13.2239 28.5821 14.7509 28.6143 15.8192 29.4885L25 37"/><path d="M42 6L30 18"/>' : '<rect x="6" y="22" width="20" height="20" rx="3"/><path d="M30 6L42 6L42 18"/><circle cx="34" cy="42" r="1.5"/><circle r="1.5" transform="matrix(1 0 0 -1 6 14)"/><circle cx="42" cy="42" r="1.5"/><circle r="1.5" transform="matrix(1 0 0 -1 6 6)"/><circle cx="42" cy="34" r="1.5"/><circle r="1.5" transform="matrix(1 0 0 -1 14 6)"/><circle cx="42" cy="26" r="1.5"/><circle r="1.5" transform="matrix(1 0 0 -1 22 6)"/><path d="M6 34L12.1195 29.4103C13.2239 28.5821 14.7509 28.6143 15.8192 29.4885L25 37"/><path d="M42 6L30 18"/>';

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

module.exports = MovingPicture;
