'use strict';

var React = require('react');

function Hold(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20 24L26 26C26 26 41 23 43 23C45 23 45 25 43 27C41 29 34 35 28 35C22 35 18 32 14 32C10 32 4 32 4 32"/><path d="M4 20C6 18 10 15 14 15C18 15 27.5 19 29 21C30.5 23 26 26 26 26"/>' : '<path d="M20 24L26 26C26 26 41 23 43 23C45 23 45 25 43 27C41 29 34 35 28 35C22 35 18 32 14 32C10 32 4 32 4 32"/><path d="M4 20C6 18 10 15 14 15C18 15 27.5 19 29 21C30.5 23 26 26 26 26"/>';

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

module.exports = Hold;
