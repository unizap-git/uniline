'use strict';

var React = require('react');

function Perfume(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="16" y="4" width="16" height="10" rx="3"/><rect x="6" y="20" width="36" height="24" rx="12"/><path d="M6 32.9999C9.04225 29.1325 18 29.9999 24 31.9999C30 33.9999 38 36.9999 42 31.9999"/><path d="M25 8.99999C25 9.55228 24.5523 9.99999 24 9.99999C23.4477 9.99999 23 9.55228 23 8.99999C23 8.44771 23.4477 7.99999 24 7.99999C24.5523 7.99999 25 8.44771 25 8.99999Z"/>' : '<rect x="16" y="4" width="16" height="10" rx="3"/><rect x="6" y="20" width="36" height="24" rx="12"/><path d="M6 32.9999C9.04225 29.1325 18 29.9999 24 31.9999C30 33.9999 38 36.9999 42 31.9999"/><path d="M25 8.99999C25 9.55228 24.5523 9.99999 24 9.99999C23.4477 9.99999 23 9.55228 23 8.99999C23 8.44771 23.4477 7.99999 24 7.99999C24.5523 7.99999 25 8.44771 25 8.99999Z"/>';

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

module.exports = Perfume;
