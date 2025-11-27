'use strict';

var React = require('react');

function GrinningFaceWithOpenMouth(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM7.5,9c0-.6.4-1,1-1s1,.4,1,1v2c0,.6-.4,1-1,1s-1-.4-1-1v-2ZM16.4,15.9c0,.1-1.3,2.6-4.4,2.6s-4.3-2.4-4.4-2.6c-.2-.3-.1-.7,0-1s.5-.5.9-.5h7c.3,0,.7.2.9.5s.2.7,0,1ZM16.5,11c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M24 35C29 35 31 31 31 31H17C17 31 19 35 24 35Z"/><path d="M31 18V22"/><path d="M17 18V22"/>';

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

module.exports = GrinningFaceWithOpenMouth;
