'use strict';

var React = require('react');

function RoundSocket(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM8.8,16.9c-.1,0-.2,0-.3,0-.4,0-.8-.3-.9-.7l-1-3c-.2-.5.1-1.1.6-1.3.5-.2,1.1.1,1.3.6l1,3c.2.5-.1,1.1-.6,1.3ZM13,9.5c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3ZM17.4,13.3l-1,3c-.1.4-.5.7-.9.7s-.2,0-.3,0c-.5-.2-.8-.7-.6-1.3l1-3c.2-.5.7-.8,1.3-.6.5.2.8.7.6,1.3Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M15 26L17 32"/><path d="M33 26L31 32"/><path d="M24 13V19"/>';

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

module.exports = RoundSocket;
