'use strict';

var React = require('react');

function VideoTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,3H4.5c-.8,0-1.5.7-1.5,1.5v15c0,.8.7,1.5,1.5,1.5h15c.8,0,1.5-.7,1.5-1.5V4.5c0-.8-.7-1.5-1.5-1.5Z"/>   <path d="M16,13.1l-5.2-3c-.3-.2-.7-.2-1,0s-.5.5-.5.9v6.1c0,.4.2.7.5.9.2,0,.3.1.5.1s.3,0,.5-.1l5.2-3c.3-.2.5-.5.5-.9s-.2-.7-.5-.9Z"/>   <path d="M3,7.5h18"/>   <path d="M16.5,3l-3,4.5"/>   <path d="M10.5,3l-3,4.5"/>' : '<path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"/><path d="M20.5 28V21.9378L25.75 24.9689L31 28L25.75 31.0311L20.5 34.0622V28Z"/><path d="M6 15H42"/><path d="M33 6L27 15"/><path d="M21 6L15 15"/>';

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

module.exports = VideoTwo;
