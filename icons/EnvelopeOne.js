'use strict';

var React = require('react');

function EnvelopeOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M36 16V8H20H4V20V32H12"/><path d="M12 40H44V28V16H28H12V28V40Z"/><path d="M12 16L28 28L44 16"/><path d="M32 16H12V31"/><path d="M44 31V16H24"/>' : '<path d="M36 16V8H20H4V20V32H12"/><path d="M12 40H44V28V16H28H12V28V40Z"/><path d="M12 16L28 28L44 16"/><path d="M32 16H12V31"/><path d="M44 31V16H24"/>';

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

module.exports = EnvelopeOne;
