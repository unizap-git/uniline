'use strict';

var React = require('react');

function FutureBuildThree(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20 8L24 4L28 8V44H20V8Z"/><path d="M12 20L20 12V44H12V20Z"/><path d="M4 35L12 28V44H4V35Z"/><path d="M28 12L36 20V44H28V12Z"/><path d="M36 28L44 34.5V44H36V28Z"/>' : '<path d="M20 8L24 4L28 8V44H20V8Z"/><path d="M12 20L20 12V44H12V20Z"/><path d="M4 35L12 28V44H4V35Z"/><path d="M28 12L36 20V44H28V12Z"/><path d="M36 28L44 34.5V44H36V28Z"/>';

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

module.exports = FutureBuildThree;
