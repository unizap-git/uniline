'use strict';

var React = require('react');

function PushDoor(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M3,3h18v18H3"/>   <path d="M12.3,5.1L3.3,2.1c-.3-.1-.6,0-.9.1-.3.2-.4.5-.4.8v18c0,.3.2.6.4.8.2.1.4.2.6.2s.2,0,.3,0l9-3c.4-.1.7-.5.7-.9V6c0-.4-.3-.8-.7-.9ZM10,13c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2Z"/>' : '<path d="M6 6H42V42H6"/><path d="M6 6V42L24 36V12L6 6Z"/><path d="M18 22V26"/>';

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

module.exports = PushDoor;
