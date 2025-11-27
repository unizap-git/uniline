'use strict';

var React = require('react');

function StartTimeSort(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 5V30H42V5"/><path d="M30.0367 10.0001L24.9999 15.0143L30.0367 20.1118"/><path d="M30 37L24 43L18 37"/><path d="M24 30V43"/><path d="M20 9.00195V21.0001"/>' : '<path d="M6 5V30H42V5"/><path d="M30.0367 10.0001L24.9999 15.0143L30.0367 20.1118"/><path d="M30 37L24 43L18 37"/><path d="M24 30V43"/><path d="M20 9.00195V21.0001"/>';

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

module.exports = StartTimeSort;
