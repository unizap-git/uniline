'use strict';

var React = require('react');

function PlayTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM16.5,12.9l-6.8,3.9c-.2,0-.3.1-.5.1s-.3,0-.5-.1c-.3-.2-.5-.5-.5-.9v-7.8c0-.4.2-.7.5-.9s.7-.2,1,0l6.8,3.9c.3.2.5.5.5.9s-.2.7-.5.9Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M18.5 24V16.2058L25.25 20.1029L32 24L25.25 27.8971L18.5 31.7942V24Z"/>';

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

module.exports = PlayTwo;
