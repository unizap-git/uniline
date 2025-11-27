'use strict';

var React = require('react');

function ArrowCircleDown(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM17.2,12.7l-4.5,4.5c0,0-.2.2-.3.2-.1,0-.3,0-.4,0s-.3,0-.4,0c-.1,0-.2-.1-.3-.2l-4.5-4.5c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l2.8,2.8v-6.6c0-.6.4-1,1-1s1,.4,1,1v6.6l2.8-2.8c.4-.4,1-.4,1.4,0s.4,1,0,1.4Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M24 15V33"/><path d="M33 24L24 33L15 24"/>';

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

module.exports = ArrowCircleDown;
