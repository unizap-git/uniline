'use strict';

var React = require('react');

function SignalTowerOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12 44L20 4H28L36 44"/><path d="M15 10H24H33"/><path d="M12 26L36 26"/><path d="M15 27L35 39"/><path d="M33 27L14 39"/><path d="M30 11L15 26"/><path d="M18 11L33 26"/>' : '<path d="M12 44L20 4H28L36 44"/><path d="M15 10H24H33"/><path d="M12 26L36 26"/><path d="M15 27L35 39"/><path d="M33 27L14 39"/><path d="M30 11L15 26"/><path d="M18 11L33 26"/>';

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

module.exports = SignalTowerOne;
