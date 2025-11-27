'use strict';

var React = require('react');

function IronDisable(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8,4h12l1,8"/>   <path d="M2,21h20c.3,0,.6-.1.8-.3s.3-.5.2-.8c0,0-1-8-1-8,0-.5-.5-.9-1-.9h-3.6c-.5-2.6-2.7-4.5-5.4-4.5s-5.3,2.3-5.5,5.2c-3.2,1.4-5.5,5.6-5.5,9.3h1ZM13.7,12.3c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-.3-.3-.3.3c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l.3-.3-.3-.3c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l.3.3.3-.3c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-.3.3.3.3Z"/>' : '<path d="M4 40H44L42 24H20C11.1634 24 4 31.1634 4 40Z"/><path d="M16 8H40L42 24"/><circle cx="24" cy="24" r="9"/><path d="M26 26L24 24L22 22"/><path d="M26 22L24 24L22 26"/>';

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

module.exports = IronDisable;
