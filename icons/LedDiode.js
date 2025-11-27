'use strict';

var React = require('react');

function LedDiode(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M3,12c0-.6.4-1,1-1h16c.6,0,1,.4,1,1v3H3v-3Z"/>   <path d="M9.5,15v7"/>   <path d="M14.5,15v7"/>   <path d="M12,1c-4.4,0-8,3.6-8,8v2c0,.6.4,1,1,1h14c.6,0,1-.4,1-1v-2c0-4.4-3.6-8-8-8ZM12,9c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5-1.1,2.5-2.5,2.5Z"/>' : '<path d="M6 24C6 22.8954 6.89543 22 8 22H40C41.1046 22 42 22.8954 42 24V30H6V24Z"/><path d="M19 30V44"/><path d="M29 30V44"/><path d="M24 4C16.268 4 10 10.268 10 18V22H38V18C38 10.268 31.732 4 24 4Z"/><circle cx="24" cy="13" r="3"/>';

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

module.exports = LedDiode;
