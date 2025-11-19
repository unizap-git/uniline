'use strict';

var React = require('react');

function FolderPlus(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" d="M5 4a2 2 0 0 0-2 2v1h10.968l-1.9-2.28A2 2 0 0 0 10.532 4H5ZM3 19V9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm9-8.5a1 1 0 0 1 1 1V13h1.5a1 1 0 1 1 0 2H13v1.5a1 1 0 1 1-2 0V15H9.5a1 1 0 1 1 0-2H11v-1.5a1 1 0 0 1 1-1Z" clip-rule="evenodd"/>' : '<path d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5.032a1 1 0 0 1-.768-.36l-1.9-2.28a1 1 0 0 0-.768-.36H5a1 1 0 0 0-1 1Z"/>';

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

module.exports = FolderPlus;
