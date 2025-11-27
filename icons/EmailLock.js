'use strict';

var React = require('react');

function EmailLock(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M44 24V9H24H4V24V39H24"/><path d="M4 9L24 24L44 9"/><rect x="31" y="33" width="12" height="8"/><path d="M40 33V30C40 28.3431 38.6569 27 37 27C35.3431 27 34 28.3431 34 30V33"/>' : '<path d="M44 24V9H24H4V24V39H24"/><path d="M4 9L24 24L44 9"/><rect x="31" y="33" width="12" height="8"/><path d="M40 33V30C40 28.3431 38.6569 27 37 27C35.3431 27 34 28.3431 34 30V33"/>';

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

module.exports = EmailLock;
