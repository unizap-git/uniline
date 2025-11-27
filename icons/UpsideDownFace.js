'use strict';

var React = require('react');

function UpsideDownFace(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM9.5,15c0,.6-.4,1-1,1s-1-.4-1-1v-.5c0-.6.4-1,1-1s1,.4,1,1v.5ZM12,7.5c-1.8,0-2.6,1.4-2.6,1.5-.3.5-.9.7-1.3.4-.5-.3-.7-.8-.4-1.3,0-.1,1.3-2.6,4.4-2.6s4.3,2.4,4.4,2.6c.2.5,0,1.1-.4,1.3s-.3.1-.4.1c-.4,0-.7-.2-.9-.6,0,0-.8-1.4-2.6-1.4ZM16.5,15c0,.6-.4,1-1,1s-1-.4-1-1v-.5c0-.6.4-1,1-1s1,.4,1,1v.5Z"/>' : '<path d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4Z"/><path d="M17 30L17 29"/><path d="M31 30L31 29"/><path d="M17 17C17 17 19 13 24 13C29 13 31 17 31 17"/>';

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

module.exports = UpsideDownFace;
