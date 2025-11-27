'use strict';

var React = require('react');

function FourPointConnection(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8 28V40H20"/><path d="M28 40H40V28"/><path d="M40 20V8H28"/><path d="M20 8H8V20"/><path d="M44 20H36V28H44V20Z"/><path d="M12 20H4V28H12V20Z"/><path d="M28 36H20V44H28V36Z"/><path d="M28 4H20V12H28V4Z"/><path d="M24 18V30"/><path d="M18 24H30"/><path d="M28 8L40 20"/><path d="M20 8L8 20"/><path d="M20 40L8 28"/><path d="M40 28L29 40"/>' : '<path d="M8 28V40H20"/><path d="M28 40H40V28"/><path d="M40 20V8H28"/><path d="M20 8H8V20"/><path d="M44 20H36V28H44V20Z"/><path d="M12 20H4V28H12V20Z"/><path d="M28 36H20V44H28V36Z"/><path d="M28 4H20V12H28V4Z"/><path d="M24 18V30"/><path d="M18 24H30"/><path d="M28 8L40 20"/><path d="M20 8L8 20"/><path d="M20 40L8 28"/><path d="M40 28L29 40"/>';

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

module.exports = FourPointConnection;
