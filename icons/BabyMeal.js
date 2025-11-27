'use strict';

var React = require('react');

function BabyMeal(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 6H10C7.23858 6 5 8.23858 5 11V37C5 39.7614 7.23858 42 10 42H30"/><path d="M19 6V23.5238L5 28"/><path d="M19 24L31 28"/><path d="M37 18V42"/><path d="M31 13.3333C31 7.11111 35 4 37 4C39 4 43 7.11111 43 13.3333C43 19.5556 31 19.5556 31 13.3333Z"/>' : '<path d="M24 6H10C7.23858 6 5 8.23858 5 11V37C5 39.7614 7.23858 42 10 42H30"/><path d="M19 6V23.5238L5 28"/><path d="M19 24L31 28"/><path d="M37 18V42"/><path d="M31 13.3333C31 7.11111 35 4 37 4C39 4 43 7.11111 43 13.3333C43 19.5556 31 19.5556 31 13.3333Z"/>';

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

module.exports = BabyMeal;
