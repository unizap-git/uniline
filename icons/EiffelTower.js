'use strict';

var React = require('react');

function EiffelTower(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21 8C21 19 17.5 33 11 44"/><path d="M27 8C27 19 30.5 33 37 44"/><path d="M4 44H44"/><path d="M14 30L34 30"/><path d="M17 21L31 21"/><path d="M20 8L28 8"/><path d="M24 4V8"/><path d="M18 44C18 44 18.8125 41.1875 20 40C21 39 22 38 24 38C26 38 27 39 28 40C29.3438 41.3437 30 44 30 44"/>' : '<path d="M21 8C21 19 17.5 33 11 44"/><path d="M27 8C27 19 30.5 33 37 44"/><path d="M4 44H44"/><path d="M14 30L34 30"/><path d="M17 21L31 21"/><path d="M20 8L28 8"/><path d="M24 4V8"/><path d="M18 44C18 44 18.8125 41.1875 20 40C21 39 22 38 24 38C26 38 27 39 28 40C29.3438 41.3437 30 44 30 44"/>';

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

module.exports = EiffelTower;
