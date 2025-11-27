'use strict';

var React = require('react');

function BowlOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 39C33.3888 39 41 31.9411 41 22H7C7 31.9411 14.6112 39 24 39Z"/><path d="M18 38L16 44H32L30 38"/><path d="M12 10L12 14"/><path d="M36 10L36 14"/><path d="M24 5L24 14"/>' : '<path d="M24 39C33.3888 39 41 31.9411 41 22H7C7 31.9411 14.6112 39 24 39Z"/><path d="M18 38L16 44H32L30 38"/><path d="M12 10L12 14"/><path d="M36 10L36 14"/><path d="M24 5L24 14"/>';

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

module.exports = BowlOne;
