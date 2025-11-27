'use strict';

var React = require('react');

function Mosaic(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M44 36H36V44H44V36Z"/><path d="M28 36H20V44H28V36Z"/><path d="M12 36H4V44H12V36Z"/><path d="M44 20H36V28H44V20Z"/><path d="M28 20H20V28H28V20Z"/><path d="M12 20H4V28H12V20Z"/><path d="M44 4H36V12H44V4Z"/><path d="M28 4H20V12H28V4Z"/><path d="M12 4H4V12H12V4Z"/><path d="M20 12H12V20H20V12Z"/><path d="M20 28H12V36H20V28Z"/><path d="M36 12H28V20H36V12Z"/><path d="M36 28H28V36H36V28Z"/>' : '<path d="M44 36H36V44H44V36Z"/><path d="M28 36H20V44H28V36Z"/><path d="M12 36H4V44H12V36Z"/><path d="M44 20H36V28H44V20Z"/><path d="M28 20H20V28H28V20Z"/><path d="M12 20H4V28H12V20Z"/><path d="M44 4H36V12H44V4Z"/><path d="M28 4H20V12H28V4Z"/><path d="M12 4H4V12H12V4Z"/><path d="M20 12H12V20H20V12Z"/><path d="M20 28H12V36H20V28Z"/><path d="M36 12H28V20H36V12Z"/><path d="M36 28H28V36H36V28Z"/>';

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

module.exports = Mosaic;
