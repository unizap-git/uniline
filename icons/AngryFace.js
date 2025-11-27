'use strict';

var React = require('react');

function AngryFace(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM6.6,9.2c.2-.5.8-.8,1.3-.5l2,1c.5.2.7.8.4,1.3s-.5.6-.9.6-.4-.1-.4-.1l-2-1c-.5-.2-.7-.8-.4-1.3h0ZM16.1,18.4c-.1,0-.5.1-.6.1-.4,0-.7-.2-.9-.5,0,0-.8-1.5-2.6-1.5s-2.6,1.4-2.6,1.5c-.3.5-.9.7-1.3.4s-.7-.8-.4-1.3,1.3-2.6,4.4-2.6,4.3,2.4,4.4,2.6c.2.5,0,1.1-.4,1.3h0ZM16.9,10.3l-2,1.1c-.1,0-.3.1-.4.1-.4,0-.7-.2-.9-.6-.2-.5,0-1.1.4-1.3l2-1c.5-.2,1.1,0,1.3.4.2.5,0,1.1-.4,1.3h0Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M31 35C31 35 29 31 24 31C19 31 17 35 17 35"/><path d="M33 19L29 21"/><path d="M15 19L19 21"/>';

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

module.exports = AngryFace;
