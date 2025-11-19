'use strict';

var React = require('react');

function ArrowRightAlt(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16.2,20H3c-.4,0-.7-.2-.9-.5s-.1-.7,0-1l4.5-6.4L2.2,5.6c-.2-.3-.2-.7,0-1s.5-.5.9-.5h13.2c.3,0,.6.2.8.4l4.8,7c.2.3.2.8,0,1.1l-4.8,7c-.2.3-.5.4-.8.4h0Z"/>' : '<path d="M16.153 19 21 12l-4.847-7H3l4.848 7L3 19h13.153Z"/>';

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

module.exports = ArrowRightAlt;
