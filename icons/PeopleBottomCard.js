'use strict';

var React = require('react');

function PeopleBottomCard(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M44 39H4V9H19L24 4L29 9H44V39Z"/><circle cx="24" cy="20" r="5"/><path d="M33 33C33 28.5817 28.9706 25 24 25C19.0294 25 15 28.5817 15 33"/>' : '<path d="M44 39H4V9H19L24 4L29 9H44V39Z"/><circle cx="24" cy="20" r="5"/><path d="M33 33C33 28.5817 28.9706 25 24 25C19.0294 25 15 28.5817 15 33"/>';

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

module.exports = PeopleBottomCard;
