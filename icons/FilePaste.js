'use strict';

var React = require('react');

function FilePaste(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" d="M6.5 3.85c0-.47.392-.85.875-.85h5.25c.483 0 .875.38.875.85h1.75c.966 0 1.75.761 1.75 1.7V6h-1c-.728 0-1.732-.06-2.434.095a4.01 4.01 0 0 0-.88.307.91.91 0 0 0-.061-.002h-.875V4.7h-3.5v1.7h-.875a.863.863 0 0 0-.875.85c0 .47.392.85.875.85h3.36L9.077 9.871a4 4 0 0 0-.892 1.526C7.97 12.083 8 13.268 8 14v5c0 .729.195 1.412.535 2H4.75C3.784 21 3 20.239 3 19.3V5.55c0-.939.784-1.7 1.75-1.7H6.5Z" clip-rule="evenodd"/>   <path fill-rule="evenodd" d="M14 8.048V12h-3.907a2 2 0 0 1 .446-.763l2.434-2.603A2 2 0 0 1 14 8.048ZM16 8v4a2 2 0 0 1-2 2h-4v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3Z" clip-rule="evenodd"/>' : '<path d="M9 20H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.429M7 8h3M8 8V4h4v2m4 0V5h-4m3 4v3a1 1 0 0 1-1 1h-3m9-3v9a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-6.397a1 1 0 0 1 .27-.683l2.434-2.603a1 1 0 0 1 .73-.317H19a1 1 0 0 1 1 1Z"/>';

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

module.exports = FilePaste;
