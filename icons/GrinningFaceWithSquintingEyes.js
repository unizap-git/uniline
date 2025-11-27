'use strict';

var React = require('react');

function GrinningFaceWithSquintingEyes(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM6.3,11.5c-.5-.1-.9-.7-.7-1.2.3-1,1.2-2.8,3-2.8s2.7,1.7,3,2.8c.1.5-.2,1.1-.7,1.2,0,0-.2,0-.2,0-.4,0-.9-.3-1-.8,0,0-.4-1.2-1-1.2s-1,1.2-1,1.2c-.1.5-.7.9-1.2.7ZM16.4,15.9c0,.1-1.3,2.6-4.4,2.6s-4.3-2.4-4.4-2.6c-.2-.3-.1-.7,0-1s.5-.5.9-.5h7c.3,0,.7.2.9.5s.2.7,0,1ZM17.7,11.5c0,0-.2,0-.2,0-.4,0-.9-.3-1-.8,0,0-.4-1.2-1-1.2s-1,1.2-1,1.2c-.1.5-.7.9-1.2.7-.5-.1-.9-.7-.7-1.2.3-1,1.2-2.8,3-2.8s2.7,1.7,3,2.8c.1.5-.2,1.1-.7,1.2Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M24 35C29 35 31 31 31 31H17C17 31 19 35 24 35Z"/><path d="M21 21C21 21 20 17 17 17C14 17 13 21 13 21"/><path d="M35 21C35 21 34 17 31 17C28 17 27 21 27 21"/>';

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

module.exports = GrinningFaceWithSquintingEyes;
