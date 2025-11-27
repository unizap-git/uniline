'use strict';

var React = require('react');

function DisabledLaptop(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M23 8.99902H11C9.34315 8.99902 8 10.3422 8 11.999V32.999H40V25.999"/><path d="M4 32.999H44V34.999C44 38.3127 41.3137 40.999 38 40.999H10C6.68629 40.999 4 38.3127 4 34.999V32.999Z"/><circle cx="36.0002" cy="13" r="6"/><path d="M32 9L40 17"/>' : '<path d="M23 8.99902H11C9.34315 8.99902 8 10.3422 8 11.999V32.999H40V25.999"/><path d="M4 32.999H44V34.999C44 38.3127 41.3137 40.999 38 40.999H10C6.68629 40.999 4 38.3127 4 34.999V32.999Z"/><circle cx="36.0002" cy="13" r="6"/><path d="M32 9L40 17"/>';

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

module.exports = DisabledLaptop;
