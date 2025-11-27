'use strict';

var React = require('react');

function Hands(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="24" cy="13" r="9"/><path d="M4.5 43.9994C4.5 38 11.5 27.9994 24 27.9994C24 27.9994 24 27.9994 24 27.9994C24 27.9994 26.7588 27.9994 29.7821 29.0906C32.7438 30.1596 36.5 31.1481 36.5 27.9994V27.9994V7.74952C36.5 5.67845 38.1789 3.99951 40.25 3.99951V3.99951C42.3211 3.99951 44 5.67844 44 7.74951V43.9994"/><path d="M2 44L46 44"/>' : '<circle cx="24" cy="13" r="9"/><path d="M4.5 43.9994C4.5 38 11.5 27.9994 24 27.9994C24 27.9994 24 27.9994 24 27.9994C24 27.9994 26.7588 27.9994 29.7821 29.0906C32.7438 30.1596 36.5 31.1481 36.5 27.9994V27.9994V7.74952C36.5 5.67845 38.1789 3.99951 40.25 3.99951V3.99951C42.3211 3.99951 44 5.67844 44 7.74951V43.9994"/><path d="M2 44L46 44"/>';

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

module.exports = Hands;
