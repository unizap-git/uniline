'use strict';

var React = require('react');

function Ripple(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 36C4 36 9 33 14 33C21.2976 33 26.7024 39 34 39C39 39 44 36 44 36"/><path d="M4 24C4 24 9 21 14 21C21.2976 21 26.7024 27 34 27C39 27 44 24 44 24"/><path d="M4 12C4 12 9 9 14 9C21.2976 9 26.7024 15 34 15C39 15 44 12 44 12"/>' : '<path d="M4 36C4 36 9 33 14 33C21.2976 33 26.7024 39 34 39C39 39 44 36 44 36"/><path d="M4 24C4 24 9 21 14 21C21.2976 21 26.7024 27 34 27C39 27 44 24 44 24"/><path d="M4 12C4 12 9 9 14 9C21.2976 9 26.7024 15 34 15C39 15 44 12 44 12"/>';

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

module.exports = Ripple;
