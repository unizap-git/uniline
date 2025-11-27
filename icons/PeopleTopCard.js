'use strict';

var React = require('react');

function PeopleTopCard(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M44 8H4V38H19L24 43L29 38H44V8Z"/><circle cx="24" cy="19" r="5"/><path d="M33 32C33 27.5817 28.9706 24 24 24C19.0294 24 15 27.5817 15 32"/>' : '<path d="M44 8H4V38H19L24 43L29 38H44V8Z"/><circle cx="24" cy="19" r="5"/><path d="M33 32C33 27.5817 28.9706 24 24 24C19.0294 24 15 27.5817 15 32"/>';

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

module.exports = PeopleTopCard;
