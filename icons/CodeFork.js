'use strict';

var React = require('react');

function CodeFork(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" d="M5 6a3 3 0 1 1 4 2.83V10a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8.83a3.001 3.001 0 1 1 2 0V10a3 3 0 0 1-3 3h-1v2.17a3.001 3.001 0 1 1-2 0V13h-1a3 3 0 0 1-3-3V8.83A3.001 3.001 0 0 1 5 6Z" clip-rule="evenodd"/>' : '<path d="M12 12v4m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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

module.exports = CodeFork;
