'use strict';

var React = require('react');

function PullDoor(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12.1,4h8.9v16h-8.9"/>   <path d="M12.7,1.2c-.2-.2-.5-.3-.8-.2L2.8,3c-.5.1-.8.5-.8,1v16c0,.5.3.9.8,1l9.1,2c0,0,.1,0,.2,0,.2,0,.4,0,.6-.2.2-.2.4-.5.4-.8V2c0-.3-.1-.6-.4-.8ZM10,13c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2Z"/>' : '<path d="M6 8V40L24.2 44V4L6 8Z"/><path d="M24.2002 8H42.0002V40H24.2002"/><path d="M18 22V26"/>';

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

module.exports = PullDoor;
